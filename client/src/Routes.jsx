import { useRoutes } from 'react-router-dom';

import { MainLayout } from './components/Layout';

const Routes = () => {
  const element = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [],
    },
  ]);

  return element;
};

export default Routes;
