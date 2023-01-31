import { Link } from 'react-router-dom';

import { Box, Link as MUILink, Stack, Typography } from '@mui/material';
import { PollOutlined } from '@mui/icons-material';

const BrandHeader = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', my: 1 }}>
      <MUILink color="inherit" to="/" sx={{ textDecoration: 'none' }} component={Link}>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          <PollOutlined fontSize="inherit" sx={{ fontSize: ({ typography }) => typography.h2.fontSize }} />
          <Typography variant="h3" sx={{ letterSpacing: '.2rem', textTransform: 'uppercase' }}>
            {process.env.REACT_APP_BASE_TITLE}
          </Typography>
        </Stack>
      </MUILink>
    </Box>
  );
};

export default BrandHeader;
