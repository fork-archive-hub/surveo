import { useSelector, useDispatch } from 'react-redux';

import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import AppBar from './AppBar';
import Footer from './Footer';

import { feathers } from '../../redux';

const MainLayout = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  const user = useSelector((state) => state.authentication.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(feathers.authentication.logout());
  };

  return (
    <>
      <AppBar isAuthenticated={isAuthenticated} user={user} onLogout={handleLogout} />
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
