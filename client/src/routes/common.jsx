import { PresentationLayout } from '../components/Layout';

import Survey from '../pages/Survey';

export const commonRoutes = [
  {
    element: <PresentationLayout />,
    children: [
      {
        path: '/surveys/:surveyId',
        element: <Survey />,
      },
    ],
  },
];
