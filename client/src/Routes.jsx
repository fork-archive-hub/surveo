import { useRoutes } from 'react-router-dom';

import { MainLayout, PresentationLayout } from './components/Layout';

import Login from './pages/Login';
import Register from './pages/Register';

const Routes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [],
    },
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
  ]);

  return element;
};

export default Routes;
