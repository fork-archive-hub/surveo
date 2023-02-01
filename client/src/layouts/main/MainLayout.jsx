import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import AppBar from './AppBar';
import Footer from './Footer';
import MainBackground from './MainBackground';

import Spinner from '../../components/elements/Spinner';

const MainLayout = () => {
  return (
    <Box sx={{ display: 'grid', gridTemplateRows: 'auto 1fr auto auto', minHeight: '100vh' }}>
      <AppBar />
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
      <MainBackground />
    </Box>
  );
};

export default MainLayout;
