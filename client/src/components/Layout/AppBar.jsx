import { useSelector, useDispatch } from 'react-redux';

import { AppBar as MUIAppBar, Container, Box, Toolbar } from '@mui/material';

import Logo from './Logo';
import AccountMenu from './AccountMenu';
import QuestMenu from './QuestMenu';

import { feathers } from '../../redux';

const AppBar = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  const authenticatedUser = useSelector((state) => state.authentication.authenticatedUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(feathers.authentication.logout());
  };

  return (
    <MUIAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
            {isAuthenticated ? <AccountMenu account={authenticatedUser} onLogout={handleLogout} /> : <QuestMenu />}
          </Box>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
