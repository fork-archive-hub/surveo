import { useEffect } from 'react';

import { useParams, useNavigate } from 'react-router-dom';

import { Grid, Stack, Alert } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

import Spinner from '../components/elements/Spinner';
import { SurveyQuestionnaireForm, useGetSurveyQuery, useSurveyProtection } from '../features/survey';

import { feathers } from '../apis/feathers';

const SurveyQuestionnaire = () => {
  const params = useParams();
  const navigate = useNavigate();

  const { survey, isLoading, isError } = useGetSurveyQuery(params.surveyId);
  const { isIPDisallowed, getCaptchaToken } = useSurveyProtection(survey._id, survey.protection?.ipRestriction);

  const handleSubmitVotes = async (votes) => {
    try {
      await feathers.client.service('votes').create({
        surveyId: params.surveyId,
        answerSheet: votes,
        token: await getCaptchaToken('vote'),
      });

      toast.success('Votes submitted successfully', { toastId: 'success-submit-votes' });
      navigate('/');
    } catch (error) {
      toast.error(error.message, { toastId: 'error-submit-votes' });
    }
  };

  useEffect(
    function fallbackToMainPage() {
      if (!isLoading && isError) {
        navigate('/');
      }
    },
    [isLoading, isError, navigate]
  );

  useDocumentTitle(isLoading ? 'Survey form' : `${survey.name} form`);

  return (
    <Grid container sx={{ justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3.5}>
        <Stack spacing={1}>
          {isLoading && <Spinner />}
          {Boolean(survey._id) && !survey.open && !isLoading && !isError && (
            <Alert severity="info">This survey is closed and no longer accepting votes.</Alert>
          )}
          {survey.open && isIPDisallowed && !isLoading && !isError && (
            <Alert severity="info">
              You have already submitted your votes. New votes will not be accepted by the server.
            </Alert>
          )}
          {Boolean(survey._id) && !isLoading && !isError && (
            <SurveyQuestionnaireForm
              survey={survey}
              isFormDisabled={isIPDisallowed || !survey.open}
              onSubmitVotes={handleSubmitVotes}
            />
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default SurveyQuestionnaire;
