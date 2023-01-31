import { AppBar as MUIAppBar, Container, Box, Toolbar } from '@mui/material';

import BrandButton from './BrandButton';
import UserMenu from './UserMenu';

const AppBar = () => {
  return (
    <MUIAppBar sx={{ position: 'sticky', top: 0, left: 0 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <BrandButton />
          <Box sx={{ flexGrow: 1 }} />
          <UserMenu />
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
