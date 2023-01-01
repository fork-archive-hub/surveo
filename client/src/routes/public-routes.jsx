import { lazy } from 'react';

import { PresentationLayout } from '../layouts';

import LandingPage from '../pages/LandingPage';

const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));

export const publicRoutes = [
  {
    element: <PresentationLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: 'auth',
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'register',
            element: <RegisterPage />,
          },
        ],
      },
    ],
  },
];
