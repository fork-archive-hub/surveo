import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, useOutlet, Link } from 'react-router-dom';

import { Box, Grid, Paper, Typography, Pagination, Backdrop } from '@mui/material';

import { toast } from 'react-toastify';

import { Button } from '../components/Form';
import { SurveyStack } from '../features/surveys';

import { feathers } from '../redux';

const Dashboard = () => {
  const [surveys, setSurveys] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const outlet = useOutlet();

  const handleSurveyActionRequest = (action, surveyId) => {
    const paths = {
      preview: `/surveys/${surveyId}`,
      view_results: `/surveys/${surveyId}/results`,
      edit: `/surveys/${surveyId}/edit`,
      delete: `/surveys/${surveyId}/delete`,
    };

    try {
      navigate(paths[action]);
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const handlePageChange = (_, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const loadUserSurveys = async () => {
      const DEFAULT_SURVEYS_PER_PAGE = 5;
      const result = await dispatch(
        feathers.survey.find({
          authorId: user._id,
          skip: (currentPage - 1) * DEFAULT_SURVEYS_PER_PAGE,
          limit: DEFAULT_SURVEYS_PER_PAGE,
        })
      );

      if (!result.error) {
        setSurveys(result.payload.data);
        setPageCount(Math.ceil(result.payload.total / DEFAULT_SURVEYS_PER_PAGE));
      } else {
        toast(result.error);
      }
    };

    loadUserSurveys();
  }, [user._id, currentPage, location, dispatch]);

  return (
    <>
      <Grid container component={Paper} elevation={1}>
        <Grid container item xs={12} alignItems="center" justifyContent="end" sx={{ p: 2 }}>
          <Button to="/surveys/create" size="large" component={Link}>
            Create survey
          </Button>
        </Grid>
        <Grid container item justifyContent="center" sx={{ px: 2, pb: 2 }}>
          {surveys.length > 0 && (
            <>
              <SurveyStack surveys={surveys} onSurveyActionRequest={handleSurveyActionRequest} />
              <Pagination
                color="primary"
                count={pageCount}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ mt: 2 }}
              />
            </>
          )}
          {surveys.length === 0 && (
            <Box sx={{ width: 1, p: 2 }}>
              <Typography variant="h5" display="block" align="center">
                You dont have any surveys yet.
              </Typography>
              <Typography variant="body1" display="block" align="center">
                Create a survey to get started.
              </Typography>
            </Box>
          )}
        </Grid>
      </Grid>
      <Backdrop open={!!outlet} sx={{ p: 2 }}>
        {outlet}
      </Backdrop>
    </>
  );
};

export default Dashboard;
