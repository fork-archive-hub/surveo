import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import { Menu, MenuItem, IconButton, Avatar, Typography, Divider } from '@mui/material';

import { BallotOutlined, LogoutOutlined, PersonOutline } from '@mui/icons-material';

import { feathers } from '../../redux';

const AccountMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const anchorElement = useRef(null);

  const authenticatedUser = useSelector((state) => state.authentication.authenticatedUser);
  const dispatch = useDispatch();

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = (callback) => {
    return () => {
      setIsMenuOpen(false);
      callback();
    };
  };

  const handleLogout = () => {
    dispatch(feathers.authentication.logout());
  };

  return (
    <>
      <IconButton onClick={handleMenuOpen} ref={anchorElement} sx={{ p: 0 }}>
        <Avatar alt="Account">
          <PersonOutline />
        </Avatar>
      </IconButton>
      <Menu
        keepMounted
        open={isMenuOpen}
        anchorEl={anchorElement.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        onClose={handleMenuClose}
      >
        <MenuItem disabled>
          <Typography variant="body1" align="center" sx={{ width: 1, textTransform: 'capitalize' }}>
            Hello, {authenticatedUser.username}!
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem to="/" component={Link} onClick={handleMenuClose}>
          <BallotOutlined sx={{ mr: 1 }} /> My Surveys
        </MenuItem>
        <Divider />
        <MenuItem to="/" component={Link} onClick={handleMenuClose(handleLogout)}>
          <LogoutOutlined sx={{ mr: 1 }} /> Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default AccountMenu;
