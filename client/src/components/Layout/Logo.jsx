import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import { PollOutlined } from '@mui/icons-material';

const Logo = () => {
  return (
    <>
      <PollOutlined sx={{ mr: 1 }} />
      <Typography
        variant="h6"
        component={Link}
        to="/"
        sx={{
          fontFamily: 'monospace',
          letterSpacing: '.2rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        SURVEO
      </Typography>
    </>
  );
};

export default Logo;
