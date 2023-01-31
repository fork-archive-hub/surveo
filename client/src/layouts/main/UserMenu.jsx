import { useState, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Menu, MenuItem, Button, Avatar, Typography, Divider } from '@mui/material';
import { BallotOutlined, LogoutOutlined, PersonOutline } from '@mui/icons-material';

import { feathers } from '../../redux';

import { toast } from 'react-toastify';

const UserMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const anchorElement = useRef(null);

  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  const handleOpenMenu = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = async () => {
    try {
      await dispatch(feathers.authentication.logout());

      toast.success('You have been successfully logged out.', { toastId: 'success-logout' });
    } catch (error) {
      toast.error('An error occurred while logging out.', { toastId: 'error-logout' });
    } finally {
      handleCloseMenu();
    }
  };

  return (
    <>
      <Button size="large" onClick={handleOpenMenu} ref={anchorElement} sx={{ color: 'inherit' }}>
        <Typography variant="button" sx={{ mr: 1 }}>
          {user.username}
        </Typography>
        <Avatar alt={user.username}>
          <PersonOutline />
        </Avatar>
      </Button>
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

export default UserMenu;
