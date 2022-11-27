import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { protectedRoutes } from './protected-routes';
import { publicRoutes } from './public-routes';
import { commonRoutes } from './common-routes';

const Routes = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);

  const routes = isAuthenticated ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return element;
};

export default Routes;
