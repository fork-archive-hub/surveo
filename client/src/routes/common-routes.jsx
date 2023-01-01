import { lazy } from 'react';

import { Navigate } from 'react-router-dom';

import { PresentationLayout } from '../layouts';

const SurveySheetPage = lazy(() => import('../pages/SurveySheetPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

export const commonRoutes = [
  {
    element: <PresentationLayout />,
    children: [
      {
        path: 'surveys',
        children: [
          {
            index: true,
            element: <Navigate to="/not-found" replace />,
          },
          {
            path: ':surveyId',
            children: [
              {
                index: true,
                element: <Navigate to="form" replace />,
              },
              {
                path: 'form',
                element: <SurveySheetPage />,
              },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];
