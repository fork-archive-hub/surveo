import PropTypes from 'prop-types';

import { AppBar as MUIAppBar, Container, Box, Toolbar } from '@mui/material';

import Logo from './Logo';
import UserMenu from './UserMenu';
import QuestMenu from './QuestMenu';

const AppBar = ({ isAuthenticated, user, onLogout }) => {
  const handleLogout = () => {
    onLogout();
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

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  user: PropTypes.object,
  onLogout: PropTypes.func.isRequired,
};

export default AppBar;
