import { Link } from 'react-router-dom';

import { Box, Stack, Typography } from '@mui/material';

import { Button } from '../components/Form';

const NotFound = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: '100vh', py: 2 }}
    >
      <Stack direction="column" alignItems="center" spacing={2}>
        <Typography variant="h2" component="span">
          404 Not Found
        </Typography>
        <Typography variant="body1" align="center">
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
