import { Link } from 'react-router-dom';

import { Grid, Paper, Stack, Typography, Button } from '@mui/material';

import { useDocumentTitle } from '../hooks';

const Landing = () => {
  useDocumentTitle('Survey creator');

  return (
    <Grid container sx={{ height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <Grid item xs={8} md={5} sx={{ p: 2, '& > img': { width: 1 } }}>
        <img src="/images/survey-laptop.svg" alt="surveo" />
      </Grid>
      <Grid item xs={12} md={7} sx={{ p: 2 }} component={Paper}>
        <Stack sx={{ textAlign: { xs: 'center', md: 'inherit' } }}>
          <Typography variant="h2">Quickly get answers to your questions with Surveo.</Typography>
          <Typography variant="h5" sx={{ opacity: 0.7 }}>
            Create surveys with any number of questions and answers while tracking the results later in real time.
          </Typography>
          <Stack direction="row" sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
            <Button to="/auth/register" variant="contained" size="large" component={Link}>
              Sign up
            </Button>
            <Button to="/auth/login" variant="outlined" size="large" component={Link}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Landing;
