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

  const surveyExists = !!survey._id;
  const isAuthenticatedUserAuthor = user._id === survey.authorId;
  const shouldRenderSurveyResults = surveyExists && isAuthenticatedUserAuthor;

  useEffect(() => {
    const loadSurvey = async () => {
      if (params.surveyId !== null) {
        const result = await dispatch(feathers.survey.get({ surveyId: params.surveyId }));

        if (result.error) {
          toast.error(result.error, {
            toastId: 'survey-result-error',
          });
          navigate('/');
        }
      }
    };

    loadSurvey();
  }, [params.surveyId, navigate, dispatch]);

  useEffect(() => {
    const checkSurveyAuthor = () => {
      if (surveyExists && !isAuthenticatedUserAuthor) {
        toast.error('You are not authorized to view this survey results');
        navigate('/');
      }
    };

    checkSurveyAuthor();
  }, [surveyExists, isAuthenticatedUserAuthor, navigate]);

  useEffect(() => {
    const subscribeSurvey = () => {
      if (shouldRenderSurveyResults) {
        dispatch(feathers.survey.subscribe({ surveyId: survey._id }));
      }
    };

    subscribeSurvey();

    return () => {
      const unsubscribeSurvey = () => {
        if (shouldRenderSurveyResults) {
          dispatch(feathers.survey.unsubscribe({ surveyId: survey._id }));
        }
      };

      unsubscribeSurvey();
    };
  }, [shouldRenderSurveyResults, survey._id, dispatch]);

  return (
    <Grid container justifyContent="center" sx={{ py: 2 }}>
      <Grid container item xs={12} sm={8} md={5} lg={4} xl={3}>
        {shouldRenderSurveyResults && <SurveyResultCharts survey={survey} />}
      </Grid>
    </Grid>
  );
};

export default SurveyResult;
