import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

import Spinner from '../components/elements/Spinner';
import { SurveyResultInspector, useGetSurveyResultsQuery, useSurveyAuthorValidator } from '../features/survey';

const SurveyResults = () => {
  const user = useSelector((state) => state.authentication.user);

  const params = useParams();
  const navigate = useNavigate();

  const { survey, isLoading, isError } = useGetSurveyResultsQuery(params.surveyId);

  useEffect(
    function fallbackToMainPage() {
      if (!isLoading && isError) {
        navigate('/');
      }
    },
    [isLoading, isError, navigate]
  );

  useSurveyAuthorValidator(survey._id === params.surveyId, survey.author?._id, user._id, '/');
  useDocumentTitle(isLoading ? 'Survey results' : `${survey.name} results`);

  return (
    <Grid container sx={{ justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3.5}>
        {isLoading && <Spinner />}
        {Boolean(survey._id) && !isLoading && !isError && <SurveyResultInspector survey={survey} />}
      </Grid>
    </Grid>
  );
};

export default SurveyResults;
