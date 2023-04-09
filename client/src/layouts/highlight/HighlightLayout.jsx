import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import HighlightBackground from './HighlightBackground';

import Spinner from '../../components/elements/Spinner';

const HighlightLayout = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Container>
      <HighlightBackground />
    </Box>
  );
};

export default HighlightLayout;
