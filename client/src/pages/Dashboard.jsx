import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation, useOutlet, Link } from 'react-router-dom';

import { Box, Grid, Paper, Typography, Backdrop } from '@mui/material';

import { toast } from 'react-toastify';

import { Button } from '../components/Form';
import { SurveyStack } from '../features/surveys';

import { feathers } from '../redux';

const Dashboard = () => {
  const [surveys, setSurveys] = useState([]);

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

  useEffect(() => {
    const loadUserSurveys = async () => {
      const result = await dispatch(feathers.survey.find({ authorId: user._id }));

      if (!result.error) {
        setSurveys(result.payload.data);
      } else {
        toast(result.error);
      }
    };

    loadUserSurveys();
  }, [user._id, location, dispatch]);

  return (
    <>
      <Grid container component={Paper} elevation={1}>
        <Grid container item xs={12} alignItems="center" justifyContent="end" sx={{ p: 2 }}>
          <Button to="/surveys/create" size="large" component={Link}>
            Create survey
          </Button>
        </Grid>
        <Grid container item sx={{ px: 2, pb: 2 }}>
          {surveys.length > 0 && <SurveyStack surveys={surveys} onSurveyActionRequest={handleSurveyActionRequest} />}
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
