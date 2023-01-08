import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

import Spinner from '../components/elements/Spinner';
import {
  SurveyResults,
  useGetSurveyQuery,
  useSubscribeSurveyResultsQuery,
  useSurveyAuthorValidator,
} from '../features/survey';

const SurveyResultsPage = () => {
  const user = useSelector((state) => state.authentication.user);

  const params = useParams();
  const navigate = useNavigate();

  const { survey, isLoading, isError } = useGetSurveyQuery(params.surveyId);

  useEffect(() => {
    if (!isLoading && isError) {
      navigate('/');
    }
  }, [isLoading, isError, navigate]);

  useSurveyAuthorValidator(survey._id === params.surveyId, survey, user, '/');
  useSubscribeSurveyResultsQuery(survey?._id);
  useDocumentTitle(isLoading ? 'Survey results' : `${survey.name} results`);

  return (
    <Grid container sx={{ justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
        {isLoading && <Spinner />}
        {Boolean(survey._id) && !isLoading && !isError && <SurveyResults survey={survey} />}
      </Grid>
    </Grid>
  );
};

export default SurveyResultsPage;
