import { Link } from 'react-router-dom';

import { Typography } from '@mui/material';
import { PollOutlined } from '@mui/icons-material';

import Button from '../../components/form/Button';

const BrandButton = () => {
  return (
    <Button variant="text" size="large" color="inherit" to="/" startIcon={<PollOutlined />} component={Link}>
      <Typography variant="body1" sx={{ letterSpacing: '.2rem', textDecoration: 'none', textTransform: 'uppercase' }}>
        {process.env.REACT_APP_BASE_TITLE}
      </Typography>
    </Button>
  );
};

export default BrandButton;
