import { useState } from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Grid, Paper, Typography, Stack, Pagination } from '@mui/material';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

import Button from '../components/form/Button';
import Spinner from '../components/elements/Spinner';
import { UserSurveyStack, useFindSurveysQuery } from '../features/survey';

const DashboardPage = () => {
  const [page, setPage] = useState(1);

  const user = useSelector((state) => state.authentication.user);

  const { surveys, isLoading, pages } = useFindSurveysQuery(user._id, 5, page);

  const handlePageChange = (_, value) => {
    setPage(value);
  };

  useDocumentTitle('Dashboard');

  return (
    <Grid container component={Paper}>
      <Grid item xs={12} sx={{ p: 2 }}>
        <Stack direction="row" sx={{ justifyContent: 'flex-end' }}>
          <Button to="/surveys/create" size="large" component={Link}>
            Create survey
          </Button>
        </Stack>
      </Grid>
      <Grid item xs={12} sx={{ px: 2, pb: 2 }}>
        {isLoading && <Spinner />}
        {surveys.length > 0 && !isLoading && (
          <Stack sx={{ alignItems: 'center' }}>
            <UserSurveyStack surveys={surveys} />
            <Pagination color="primary" count={pages} page={page} onChange={handlePageChange} />
          </Stack>
        )}
        {surveys.length === 0 && !isLoading && (
          <Stack sx={{ alignItems: 'center' }}>
            <Typography variant="h5">You dont have any surveys yet.</Typography>
            <Typography variant="body1">Create a survey to get started.</Typography>
          </Stack>
        )}
      </Grid>
    </Grid>
  );
};

export default DashboardPage;
