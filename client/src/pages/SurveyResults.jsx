import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { SurveyResultCharts } from '../features/surveys';

import { feathers } from '../redux';

const SurveyResult = () => {
  const user = useSelector((state) => state.authentication.user);
  const survey = useSelector((state) => state.survey.data);
  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadSurvey = async () => {
      if (params.surveyId !== null) {
        dispatch(feathers.survey.get({ surveyId: params.surveyId }));
      }
    };

    loadSurvey();
  }, [params.surveyId, dispatch]);

  useEffect(() => {
    const checkSurveyAuthor = () => {
      if (Object.keys(survey).length > 0) {
        if (survey.authorId !== user._id) {
          toast.error('You are not authorized to view this survey results');
          navigate('/');
        }
      }
    };

    checkSurveyAuthor();
  }, [user._id, survey, navigate]);

  useEffect(() => {
    const subscribeSurvey = () => {
      if (survey._id && survey.authorId === user._id) {
        dispatch(feathers.survey.subscribe({ surveyId: survey._id }));
      }
    };

    subscribeSurvey();

    return () => {
      const unsubscribeSurvey = () => {
        if (survey._id) {
          dispatch(feathers.survey.unsubscribe({ surveyId: survey._id }));
        }
      };

      unsubscribeSurvey();
    };
  }, [survey._id, survey.authorId, user._id, dispatch]);

  return (
    <Grid container justifyContent="center" sx={{ py: 2 }}>
      <Grid container item xs={12} sm={8} md={5} lg={4} xl={3}>
        {Object.keys(survey).length > 0 && <SurveyResultCharts survey={survey} />}
      </Grid>
    </Grid>
  );
};

export default SurveyResult;
