import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import WaveTop from './WaveTop';
import WaveBottom from './WaveBottom';

const PresentationLayout = () => {
  return (
    <>
      <WaveTop />
      <Container maxWidth="xl" sx={{ height: 1 }}>
        <Outlet />
      </Container>
      <WaveBottom />
    </>
  );
};

export default PresentationLayout;
