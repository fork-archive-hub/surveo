import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';

import FixedBackground from './FixedBackground';

const PresentationLayout = () => {
  return (
    <Box>
      <FixedBackground />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </Box>
  );
};

export default PresentationLayout;
