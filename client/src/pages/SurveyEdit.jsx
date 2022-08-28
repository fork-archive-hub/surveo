import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid, ClickAwayListener, Box } from '@mui/material';

import { toast } from 'react-toastify';

import { SurveyEditorForm } from '../features/surveys';

import { feathers } from '../redux';

const SurveyEdit = () => {
  const [surveyInformation, setSurveyInformation] = useState({});

  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();

  const onClickAway = () => {
    navigate('/');
  };

  const onUpdateSurvey = async (data) => {
    const result = await dispatch(
      feathers.survey.patch({
        surveyId: params.surveyId,
        data: data,
      })
    );

    if (result.error) {
      toast.error(result.error);
      return navigate('/');
    }

    toast.success('Survey updated');
    navigate('/');
  };

  useEffect(() => {
    const loadSurveyInformation = async () => {
      if (params.surveyId !== null) {
        const result = await dispatch(feathers.survey.get({ surveyId: params.surveyId }));

        if (result.error) {
          toast.error(result.error, {
            toastId: 'load-survey-information-error',
          });
          return navigate('/');
        }

        setSurveyInformation({
          name: result.payload.name,
          open: result.payload.open,
          protection: result.payload.protection,
          authorId: result.payload.authorId,
        });
      }
    };

    loadSurveyInformation();
  }, [params.surveyId, navigate, dispatch]);

  useEffect(() => {
    const checkSurveyAuthor = () => {
      if (Object.keys(surveyInformation).length > 0) {
        if (surveyInformation.authorId !== user._id) {
          toast.error('You cannot edit this survey');
          navigate('/');
        }
      }
    };

    checkSurveyAuthor();
  }, [user._id, surveyInformation, navigate]);

  return (
    <Grid container justifyContent="center" maxWidth="xl">
      <Grid container item xs={12} sm={8} md={5} lg={4} xl={3}>
        <ClickAwayListener onClickAway={onClickAway}>
          <Box sx={{ width: 1 }}>
            {Object.keys(surveyInformation).length > 0 && (
              <SurveyEditorForm survey={surveyInformation} onUpdateSurvey={onUpdateSurvey} />
            )}
          </Box>
        </ClickAwayListener>
      </Grid>
    </Grid>
  );
};

export default SurveyEdit;
