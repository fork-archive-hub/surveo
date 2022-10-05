import { Link } from 'react-router-dom';

import { Grid, Box, Paper, Stack, Typography, Button } from '@mui/material';

import { useDocumentTitle } from '../hooks';

const Landing = () => {
  useDocumentTitle('Survey creator');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: { xs: 'start', md: 'center' },
        height: '100vh',
        py: 2,
      }}
    >
      <Grid container component={Paper} elevation={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Grid item xs={12} md={7} sx={{ p: 2 }}>
          <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'inherit' } }}>
            <Typography variant="h2">Quickly get answers to your questions with Surveo.</Typography>
            <Typography variant="h5" sx={{ opacity: 0.7 }}>
              Create surveys with any number of questions and answers while tracking the results later in real time.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', md: 'start' } }}>
              <Button to="/auth/register" variant="contained" size="large" component={Link}>
                Sign up
              </Button>
              <Button to="/auth/login" variant="outlined" size="large" component={Link}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={8} md={5} sx={{ p: 2, '& > img': { width: 1 } }}>
          <img src="/images/survey-laptop.svg" alt="surveo" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Landing;
