import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import BackgroundScene from './BackgroundScene';

const PresentationLayout = () => {
  return (
    <>
      <BackgroundScene />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default PresentationLayout;
