import { lazy } from 'react';

import { MainLayout, PresentationLayout } from '../../layouts';

const Dashboard = lazy(() => import('../../pages/Dashboard'));
const SurveyEdit = lazy(() => import('../../pages/SurveyEdit'));
const SurveyDelete = lazy(() => import('../../pages/SurveyDelete'));
const SurveyCreate = lazy(() => import('../../pages/SurveyCreate'));
const SurveyResults = lazy(() => import('../../pages/SurveyResults'));

export const protectedRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
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
            element: <SurveyCreate />,
          },
          {
            path: ':surveyId',
            children: [
              {
                path: 'edit',
                element: <SurveyEdit />,
              },
              {
                path: 'delete',
                element: <SurveyDelete />,
              },
              {
                path: 'results',
                element: <SurveyResults />,
              },
            ],
          },
        ],
      },
    ],
  },
];
