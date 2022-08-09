import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import AppBar from './AppBar';
import Footer from './Footer';

const MainLayout = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
