import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { protectedRoutes } from './protected';
import { publicRoutes } from './public';
import { commonRoutes } from './common';

const Routes = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);

  const availableRoutes = isAuthenticated ? protectedRoutes : publicRoutes;
  const element = useRoutes([...availableRoutes, ...commonRoutes]);

  return element;
};

export default Routes;
