import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { Grid, Stack, Alert } from '@mui/material';

import { toast } from 'react-toastify';

import { SurveyForm } from '../features/surveys';

import { feathers } from '../redux';

const Survey = () => {
  const [voteAlreadySubmitted, setVoteAlreadySubmitted] = useState(false);

  const survey = useSelector((state) => state.survey.data);
  const dispatch = useDispatch();

  const params = useParams();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmitVotes = async (votes) => {
    try {
      const token = await executeRecaptcha('vote');
      const result = await dispatch(
        feathers.vote.create({
          surveyId: params.surveyId,
          answerSheet: votes,
          token: token,
        })
      );

      if (!result.error) {
        toast.success('Votes submitted successfully');
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  useEffect(() => {
    const loadSurvey = async () => {
      if (params.surveyId !== null) {
        dispatch(feathers.survey.get({ surveyId: params.surveyId }));
      }
    };

    loadSurvey();
  }, [params.surveyId, dispatch]);

  useEffect(() => {
    const loadSubmittedVotes = async () => {
      if (survey._id && survey.protection.ipRestriction) {
        const result = await dispatch(feathers.vote.get({ surveyId: survey._id }));

        if (!result.error) {
          setVoteAlreadySubmitted(result.payload.voted);
        }
      }
    };

    loadSubmittedVotes();
  }, [survey._id, survey.protection, dispatch]);

  return (
    <Grid container justifyContent="center" sx={{ py: 2 }}>
      <Grid container item xs={12} sm={8} md={5} lg={4} xl={3}>
        <Stack direction="column" spacing={2} sx={{ width: 1 }}>
          {voteAlreadySubmitted && (
            <Alert severity="info">
              You have already submitted your votes. New votes will not be accepted by the server.
            </Alert>
          )}
          {Object.keys(survey).length > 0 && (
            <SurveyForm survey={survey} disableForm={voteAlreadySubmitted} onSubmitVotes={handleSubmitVotes} />
          )}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Survey;
