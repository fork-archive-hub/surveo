import { PresentationLayout } from '../components/Layout';

import Index from '../pages/Index';
import Survey from '../pages/Survey';

export const commonRoutes = [
  {
    element: <PresentationLayout />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
      {
        path: '/surveys/:surveyId',
        element: <Survey />,
      },
    ],
  },
];
