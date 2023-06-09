import { Link } from 'react-router-dom';

import { Grid, Paper, Stack, Typography, Button } from '@mui/material';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

const Landing = () => {
  useDocumentTitle('Survey creator');

  return (
    <Grid
      container
      sx={{
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: { xs: 'flex-start', sm: 'normal' },
      }}
    >
      <Grid item xs={8} md={5} sx={{ p: 2, '& > img': { width: 1 } }}>
        <img src="/images/survey-laptop.svg" alt={process.env.REACT_APP_BASE_TITLE} />
      </Grid>
      <Grid item xs={12} md={7} sx={{ p: 2 }} component={Paper}>
        <Stack sx={{ textAlign: { xs: 'center', md: 'inherit' } }}>
          <Typography variant="h2">
            Quickly get answers to your questions with {process.env.REACT_APP_BASE_TITLE}.
          </Typography>
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
