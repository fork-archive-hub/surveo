import { PresentationLayout } from '../components/Layout';

import Index from '../pages/Index';

export const commonRoutes = [
  {
    element: <PresentationLayout />,
    children: [
      {
        path: '/',
        element: <Index />,
      },
    ],
  },
];
