import { Link as RouterLink } from 'react-router-dom';

import { Box, Link, Stack, Typography } from '@mui/material';
import { PollOutlined } from '@mui/icons-material';

const BrandHeader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
      <Link color="inherit" to="/" sx={{ textDecoration: 'none' }} component={RouterLink}>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <PollOutlined fontSize="inherit" sx={{ fontSize: ({ typography }) => typography.h2.fontSize }} />
          <Typography variant="h3" sx={{ letterSpacing: '.2rem', textTransform: 'uppercase' }}>
            {process.env.REACT_APP_BASE_TITLE}
          </Typography>
        </Stack>
      </Link>
    </Box>
  );
};

export default BrandHeader;
