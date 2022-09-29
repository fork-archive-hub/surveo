import { PresentationLayout } from '../../layouts';

import SurveyForm from '../../pages/SurveyForm';
import NotFound from '../../pages/NotFound';

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
