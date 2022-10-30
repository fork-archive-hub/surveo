import { lazy } from 'react';

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
            path: ':surveyId',
            children: [
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
