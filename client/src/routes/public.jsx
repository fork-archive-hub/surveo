import { PresentationLayout } from '../components/Layout';

import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from '../pages/Register';

export const publicRoutes = [
  {
    element: <PresentationLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
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
