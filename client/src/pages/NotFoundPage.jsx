import { Link } from 'react-router-dom';

import { Grid, Paper, Stack, Typography } from '@mui/material';

import { useDocumentTitle } from '../hooks';

import { Button } from '../components';

const NotFoundPage = () => {
  useDocumentTitle('Page not found');

  return (
    <Grid container sx={{ height: '100vh', alignItems: { md: 'center' }, justifyContent: 'center', py: 2 }}>
      <Grid item>
        <Stack sx={{ alignItems: 'center', p: 2 }} component={Paper}>
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
      </Grid>
    </Grid>
  );
};

export default NotFoundPage;
