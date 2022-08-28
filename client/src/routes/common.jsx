import { PresentationLayout } from '../components/Layout';

import Survey from '../pages/Survey';
import NotFound from '../pages/NotFound';

export const commonRoutes = [
  {
    element: <PresentationLayout />,
    children: [
      {
        path: '/surveys/:surveyId',
        element: <Survey />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
];
