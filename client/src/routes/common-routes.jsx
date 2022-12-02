import { lazy } from 'react';

import { Navigate } from 'react-router-dom';

import { PresentationLayout } from '../layouts';

const SurveyForm = lazy(() => import('../pages/SurveyForm'));
const NotFound = lazy(() => import('../pages/NotFound'));

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
                element: <SurveyForm />,
              },
            ],
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
