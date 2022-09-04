import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { Grid, Stack, Alert } from '@mui/material';

import { toast } from 'react-toastify';

import { SurveyForm } from '../features/surveys';

import { feathers } from '../redux';

const Survey = () => {
  const [isIPDisallowed, setIsIPDisallowed] = useState(false);

  const survey = useSelector((state) => state.survey.data);
  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();
  const { executeRecaptcha } = useGoogleReCaptcha();

  const surveyExists = !!survey._id;
  const isIPProtectionEnabled = survey.protection && survey.protection.ipRestriction;
  const isFormDisabled = isIPProtectionEnabled && isIPDisallowed;

  const onSubmitVotes = async (votes) => {
    try {
      const token = await executeRecaptcha('vote');
      const result = await dispatch(
        feathers.vote.create({
          surveyId: params.surveyId,
          answerSheet: votes,
          token: token,
        })
      );

      if (result.error) {
        return toast.error(result.error);
      }

      if (survey.protection.ipRestriction) {
        setIsIPDisallowed(true);
      }

      toast.success('Votes submitted successfully');
      navigate('/');
    } catch (error) {
      toast.error('Something went wrong');
      console.error(error);
    }
  };

  useEffect(() => {
    const loadSurvey = async () => {
      if (params.surveyId !== null) {
        const result = await dispatch(feathers.survey.get({ surveyId: params.surveyId }));

        if (result.error) {
          toast.error(result.error, {
            toastId: 'load-survey-error',
          });
          navigate('/');
        }
      }
    };

    loadSurvey();
  }, [params.surveyId, navigate, dispatch]);

  useEffect(() => {
    const loadSubmittedVotes = async () => {
      if (surveyExists && isIPProtectionEnabled) {
        const result = await dispatch(feathers.vote.get({ surveyId: survey._id }));

        if (!result.error) {
          setIsIPDisallowed(result.payload.voted);
        }
      }
    };

    loadSubmittedVotes();
  }, [surveyExists, isIPProtectionEnabled, survey._id, dispatch]);

  return (
    <Grid container justifyContent="center" sx={{ py: 2 }}>
      <Grid container item xs={12} sm={8} md={5} lg={4} xl={3}>
        <Stack direction="column" spacing={2} sx={{ width: 1 }}>
          {isFormDisabled && (
            <Alert severity="info">
              You have already submitted your votes. New votes will not be accepted by the server.
            </Alert>
          )}
          {surveyExists && <SurveyForm survey={survey} disableForm={isFormDisabled} onSubmitVotes={onSubmitVotes} />}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Survey;
