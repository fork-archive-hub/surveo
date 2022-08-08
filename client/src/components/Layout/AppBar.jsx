import { useSelector, useDispatch } from 'react-redux';

import { AppBar as MUIAppBar, Container, Box, Toolbar } from '@mui/material';

import Logo from './Logo';
import UserMenu from './UserMenu';
import QuestMenu from './QuestMenu';

import { feathers } from '../../redux';

const AppBar = () => {
  const isAuthenticated = useSelector((state) => state.authentication.isAuthenticated);
  const user = useSelector((state) => state.authentication.user);

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
            {isAuthenticated ? <UserMenu user={user} onLogout={handleLogout} /> : <QuestMenu />}
          </Box>
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
