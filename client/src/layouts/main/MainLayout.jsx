import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import AppBar from './AppBar';
import Footer from './Footer';

import { Spinner } from '../../components';

const MainLayout = () => {
  return (
    <>
      <AppBar />
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};

export default MainLayout;
