import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

import { Link } from 'react-router-dom';

import { Menu, MenuItem, IconButton, Avatar, Typography, Divider } from '@mui/material';
import { BallotOutlined, LogoutOutlined, PersonOutline } from '@mui/icons-material';

const UserMenu = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const anchorElement = useRef(null);

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    onLogout();
    handleCloseMenu();
  };

  return (
    <>
      <IconButton onClick={handleOpenMenu} ref={anchorElement} sx={{ p: 0 }}>
        <Avatar alt="Profile">
          <PersonOutline />
        </Avatar>
      </IconButton>
      <Menu
        keepMounted
        open={isMenuOpen}
        anchorEl={anchorElement.current}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            width: Math.min(200, window.innerWidth),
          },
        }}
        onClose={handleCloseMenu}
      >
        <MenuItem disabled>
          <Typography variant="body1" sx={{ width: 1, textAlign: 'center' }}>
            Hello, {user.username}!
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem to="/" component={Link} onClick={handleCloseMenu}>
          <BallotOutlined sx={{ mr: 1 }} /> My Surveys
        </MenuItem>
        <Divider />
        <MenuItem to="/" component={Link} onClick={handleLogout}>
          <LogoutOutlined sx={{ mr: 1 }} /> Logout
        </MenuItem>
      </Menu>
    </>
  );
};

UserMenu.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
