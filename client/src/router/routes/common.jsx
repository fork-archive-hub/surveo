import { PresentationLayout } from '../../layouts';

import Survey from '../../pages/Survey';
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
            element: <Survey />,
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
