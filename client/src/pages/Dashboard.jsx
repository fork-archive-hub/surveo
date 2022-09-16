import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';

import { Grid, Paper, Typography, Stack, Pagination } from '@mui/material';

import { useUserSurveys } from '../hooks';

import { Button } from '../components/Form';
import { Spinner } from '../components/Elements';
import { SurveyStack } from '../features/surveys';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector((state) => state.authentication.user);

  const { surveys, isLoading, page, refresh } = useUserSurveys(user._id, 5);

  const onSurveyActionRequest = (action, surveyId) => {
    const paths = {
      preview: `/surveys/${surveyId}`,
      view_results: `/surveys/${surveyId}/results`,
      edit: `/surveys/${surveyId}/edit`,
      delete: `/surveys/${surveyId}/delete`,
    };

    if (Object.prototype.hasOwnProperty.call(paths, action)) {
      navigate(paths[action]);
    }
  };

  const onPageChange = (_, value) => {
    page.set(value);
  };

  useEffect(() => {
    if (location.pathname === '/') {
      refresh();
    }
  }, [location, refresh]);

  return (
    <Grid container component={Paper} elevation={1}>
      <Grid container item xs={12} alignItems="center" justifyContent="end" sx={{ p: 2 }}>
        <Button to="/surveys/create" size="large" component={Link}>
          Create survey
        </Button>
      </Grid>
      <Grid container item sx={{ px: 2, pb: 2 }}>
        {isLoading && <Spinner />}
        {Boolean(surveys.length > 0 && !isLoading) && (
          <Stack direction="column" alignItems="center" spacing={2} sx={{ width: 1 }}>
            <SurveyStack surveys={surveys} onSurveyActionRequest={onSurveyActionRequest} />
            <Pagination color="primary" count={page.count} page={page.current} onChange={onPageChange} />
          </Stack>
        )}
        {Boolean(surveys.length === 0 && !isLoading) && (
          <Stack direction="column" alignItems="center" sx={{ width: 1 }}>
            <Typography variant="h5">You dont have any surveys yet.</Typography>
            <Typography variant="body1">Create a survey to get started.</Typography>
          </Stack>
        )}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
