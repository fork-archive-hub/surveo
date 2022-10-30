import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppBar as MUIAppBar, Container, Box, Toolbar, Typography } from '@mui/material';
import { PollOutlined } from '@mui/icons-material';

import UserMenu from './UserMenu';

import { feathers } from '../../redux';

const AppBar = () => {
  const user = useSelector((state) => state.authentication.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(feathers.authentication.logout());
  };

  return (
    <MUIAppBar sx={{ position: 'static' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <PollOutlined sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              fontFamily: 'monospace',
              letterSpacing: '.2rem',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            SURVEO
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <UserMenu user={user} onLogout={handleLogout} />
        </Toolbar>
      </Container>
    </MUIAppBar>
  );
};

export default AppBar;
