import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import HighlighBackground from './HighlighBackground';

import Spinner from '../../components/elements/Spinner';

const HighlightLayout = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Container>
      <HighlighBackground />
    </Box>
  );
};

export default HighlightLayout;
