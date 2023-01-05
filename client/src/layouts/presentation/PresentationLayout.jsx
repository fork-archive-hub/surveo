import { Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import { Container } from '@mui/material';

import FixedBackground from './FixedBackground';

import Spinner from '../../components/elements/Spinner';

const PresentationLayout = () => {
  return (
    <>
      <FixedBackground />
      <Container maxWidth="xl">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default PresentationLayout;
