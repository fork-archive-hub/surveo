import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';

import { Grid, Paper, Typography, Stack, Pagination } from '@mui/material';

import { useDocumentTitle, useGetUserSurveysQuery } from '../hooks';

import { Button } from '../components/form';
import { Spinner } from '../components/elements';
import { UserSurveyStack } from '../features/surveys';

const Dashboard = () => {
  const user = useSelector((state) => state.authentication.user);

  const location = useLocation();

  const { surveys, isLoading, page, refresh } = useGetUserSurveysQuery(user._id, 5);

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

  useDocumentTitle('Dashboard');

  return (
    <Grid container component={Paper} elevation={1}>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Stack direction="row-reverse">
          <Button to="/surveys/create" size="large" component={Link}>
            Create survey
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ px: 2, pb: 2 }}>
        {isLoading && <Spinner />}
        {surveys.length > 0 && !isLoading && (
          <Stack sx={{ width: 1, alignItems: 'center' }}>
            <UserSurveyStack surveys={surveys} />
            <Pagination color="primary" count={page.count} page={page.current} onChange={handlePageChange} />
          </Stack>
        )}
        {surveys.length === 0 && !isLoading && (
          <Stack sx={{ width: 1, alignItems: 'center' }}>
            <Typography variant="h5">You dont have any surveys yet.</Typography>
            <Typography variant="body1">Create a survey to get started.</Typography>
          </Stack>
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
