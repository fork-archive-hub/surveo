import { Link } from 'react-router-dom';

import { Box, Stack, Typography } from '@mui/material';

import { useDocumentTitle } from '../hooks';

import { Button } from '../components/form';

const NotFound = () => {
  useDocumentTitle('Page not found');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        py: 2,
      }}
    >
      <Stack sx={{ alignItems: 'center' }}>
        <Typography variant="h2" component="span">
          404 Not Found
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          The page you are looking for does not exist. Click the button below to go back to the home page.
        </Typography>
        <Button to="/" variant="outlined" size="large" component={Link}>
          Back to Home
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFound;
