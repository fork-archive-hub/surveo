import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import { Grid, Paper, Typography, Stack, Pagination } from '@mui/material';

import { useUserSurveys } from '../hooks';

import { Button } from '../components/form';
import { Spinner } from '../components/elements';
import { SurveyBarList } from '../features/surveys';

const Dashboard = () => {
  const user = useSelector((state) => state.authentication.user);

  const location = useLocation();

  const { surveys, isLoading, page, refresh } = useUserSurveys(user._id, 5);

  const handlePageChange = (_, value) => {
    page.set(value);
  };

  useEffect(() => {
    const refreshCurrentPageResults = () => {
      if (location.pathname === '/') {
        refresh();
      }
    };

    refreshCurrentPageResults();
  }, [location, refresh]);

  return (
    <Grid container component={Paper} elevation={1}>
      <Grid container item xs={12} sx={{ alignItems: 'center', justifyContent: 'end', p: 2 }}>
        <Button to="/surveys/create" size="large" component={Link}>
          Create survey
        </Button>
      </Grid>
      <Grid container item sx={{ px: 2, pb: 2 }}>
        {isLoading && <Spinner />}
        {surveys.length > 0 && !isLoading && (
          <Stack direction="column" spacing={2} sx={{ width: 1, alignItems: 'center' }}>
            <SurveyBarList surveys={surveys} />
            <Pagination color="primary" count={page.count} page={page.current} onChange={handlePageChange} />
          </Stack>
        )}
        {surveys.length === 0 && !isLoading && (
          <Stack direction="column" sx={{ width: 1, alignItems: 'center' }}>
            <Typography variant="h5">You dont have any surveys yet.</Typography>
            <Typography variant="body1">Create a survey to get started.</Typography>
          </Stack>
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
