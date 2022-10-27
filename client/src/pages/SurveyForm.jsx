import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

import { Grid, Stack, Alert } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle, useGetSurveyQuery, useSurveyProtection } from '../hooks';

import { Spinner } from '../components/elements';
import { SurveySheetForm } from '../features/survey';

import { feathers } from '../redux';

const SurveyForm = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { survey, isLoading } = useGetSurveyQuery(params.surveyId);
  const { isIPDisallowed, getCaptchaToken } = useSurveyProtection(survey);

  const handleSubmitVotes = async (votes) => {
    try {
      const token = await getCaptchaToken('vote');
      const result = await dispatch(
        feathers.vote.create({
          surveyId: params.surveyId,
          answerSheet: votes,
          token: token,
        })
      );

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success('Votes submitted successfully');
        navigate('/');
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  useDocumentTitle(isLoading ? 'Survey form' : `${survey.name} form`);

  return (
    <Grid container sx={{ justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
        <Stack>
          {isLoading && <Spinner />}
          {Boolean(survey._id) && !survey.open && !isLoading && (
            <Alert severity="info">This survey is closed and no longer accepting votes.</Alert>
          )}
          {survey.open && isIPDisallowed && !isLoading && (
            <Alert severity="info">
              You have already submitted your votes. New votes will not be accepted by the server.
            </Alert>
          )}
          {Boolean(survey._id) && !isLoading && (
            <SurveySheetForm
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

export default SurveyForm;
