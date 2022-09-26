import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { protectedRoutes } from './routes/protected';
import { publicRoutes } from './routes/public';
import { commonRoutes } from './routes/common';

const AppRoutes = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);

  const routes = isAuthenticated ? protectedRoutes : publicRoutes;
  const element = useRoutes([...routes, ...commonRoutes]);

  return element;
};

export default AppRoutes;
