import { lazy } from 'react';

import { MainLayout, PresentationLayout } from '../layouts';

const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const SurveyEditPage = lazy(() => import('../pages/SurveyEditPage'));
const SurveyDeletePage = lazy(() => import('../pages/SurveyDeletePage'));
const SurveyCreatePage = lazy(() => import('../pages/SurveyCreatePage'));
const SurveyResultsPage = lazy(() => import('../pages/SurveyResultsPage'));

export const protectedRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
    ],
  },
  {
    element: <PresentationLayout />,
    children: [
      {
        path: 'surveys',
        children: [
          {
            path: 'create',
            element: <SurveyCreatePage />,
          },
          {
            path: ':surveyId',
            children: [
              {
                path: 'edit',
                element: <SurveyEditPage />,
              },
              {
                path: 'delete',
                element: <SurveyDeletePage />,
              },
              {
                path: 'results',
                element: <SurveyResultsPage />,
              },
            ],
          },
        ],
      },
    ],
  },
];
