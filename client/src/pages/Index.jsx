import { Link } from 'react-router-dom';

import { Grid, Box, Paper, Stack, Typography, Button } from '@mui/material';

const Index = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: { sm: 'auto', md: '100vh' }, p: 2 }}
    >
      <Grid container component={Paper} elevation={1} justifyContent="center" alignItems="center">
        <Grid item xs={12} md={7} sx={{ p: 2 }}>
          <Stack spacing={2} sx={{ textAlign: { xs: 'center', md: 'inherit' } }}>
            <Typography variant="h2">Quickly get answers to your questions with Surveo.</Typography>
            <Typography variant="h5" sx={{ opacity: 0.7 }}>
              Create surveys with any number of questions and answers while tracking the results later in real time.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ justifyContent: { xs: 'center', md: 'start' } }}>
              <Button to="/register" variant="contained" size="large" component={Link}>
                Sign up
              </Button>
              <Button to="/login" variant="outlined" size="large" component={Link}>
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

export default Index;