import { MainLayout } from '../components/Layout';

import Dashboard from '../pages/Dashboard';

export const protectedRoutes = [
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Dashboard />,
      },
    ],
  },
];
