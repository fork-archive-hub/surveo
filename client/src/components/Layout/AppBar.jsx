import { useSelector } from 'react-redux';

import { AppBar as MUIAppBar, Container, Box, Toolbar } from '@mui/material';

import Logo from './Logo';
import AccountMenu from './AccountMenu';
import QuestMenu from './QuestMenu';

const AppBar = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);

  return (
    <MUIAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>{isAuthenticated ? <AccountMenu /> : <QuestMenu />}</Box>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
