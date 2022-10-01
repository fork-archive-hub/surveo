import PropTypes from 'prop-types';
import { useState, useRef } from 'react';

import { Link } from 'react-router-dom';
import { Menu, MenuItem, IconButton, Avatar, Typography, Divider } from '@mui/material';

import { BallotOutlined, LogoutOutlined, PersonOutline } from '@mui/icons-material';

const UserMenu = ({ user, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const anchorElement = useRef(null);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = (callback) => {
    return () => {
      setIsMenuOpen(false);

      if (callback) {
        callback();
      }
    };
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen} ref={anchorElement} sx={{ p: 0 }}>
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
        onClose={handleMenuClose}
      >
        <MenuItem disabled>
          <Typography variant="body1" sx={{ width: 1, textTransform: 'capitalize', textAlign: 'center' }}>
            Hello, {user.username}!
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem to="/" component={Link} onClick={handleMenuClose()}>
          <BallotOutlined sx={{ mr: 1 }} /> My Surveys
        </MenuItem>
        <Divider />
        <MenuItem to="/" component={Link} onClick={handleMenuClose(onLogout)}>
          <LogoutOutlined sx={{ mr: 1 }} /> Logout
        </MenuItem>
      </Menu>
    </>
  );
};

UserMenu.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default UserMenu;
