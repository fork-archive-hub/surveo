import { lazy } from 'react';

import { PresentationLayout } from '../layouts';

import Landing from '../pages/Landing';

const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));

export const publicRoutes = [
  {
    element: <PresentationLayout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: 'auth',
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'register',
            element: <Register />,
          },
        ],
      },
    ],
  },
];
