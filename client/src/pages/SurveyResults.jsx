import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { useSurveyResults } from '../hooks';

import { Spinner } from '../components/Elements';
import { SurveyResultCharts } from '../features/surveys';

const SurveyResult = () => {
  const user = useSelector((state) => state.authentication.user);

  const params = useParams();
  const navigate = useNavigate();

  const { survey, isLoading } = useSurveyResults(params.surveyId);

  useEffect(() => {
    const validateSurveyAuthor = () => {
      if (Boolean(survey._id) && survey.authorId !== user._id) {
        toast.error('You are not authorized to view this survey results');
        navigate('/');
      }
    };

    validateSurveyAuthor();
  }, [survey._id, survey.authorId, user._id, navigate]);

  return (
    <Grid container justifyContent="center" sx={{ py: 2 }}>
      <Grid container item xs={12} sm={8} md={5} lg={4} xl={3}>
        {isLoading && <Spinner />}
        {Boolean(survey._id) && !isLoading && <SurveyResultCharts survey={survey} />}
      </Grid>
    </Grid>
  );
};

export default SurveyResult;
