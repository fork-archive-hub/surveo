import { PresentationLayout } from '../components/Layout';

import Login from '../pages/Login';
import Register from '../pages/Register';

export const publicRoutes = [
  {
    element: <PresentationLayout />,
    children: [
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
];
