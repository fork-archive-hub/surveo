import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import FixedBackground from './FixedBackground';

const PresentationLayout = () => {
  return (
    <>
      <FixedBackground />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default PresentationLayout;
