import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid, ClickAwayListener, Box } from '@mui/material';

import { toast } from 'react-toastify';

import { SurveyEditorForm } from '../features/surveys';

import { feathers } from '../redux';

const SurveyEdit = () => {
  const [surveyInformation, setSurveyInformation] = useState({});
  const dispatch = useDispatch();

  const params = useParams();
  const navigate = useNavigate();

  const onClickAway = () => {
    navigate(-1);
  };

  const onUpdateSurvey = async (data) => {
    const result = await dispatch(
      feathers.survey.patch({
        surveyId: params.surveyId,
        data: data,
      })
    );

    if (result.error) {
      return toast.error(result.error);
    }

    toast.success('Survey updated');
    navigate(-1);
  };

  useEffect(() => {
    const loadSurveyInformation = async () => {
      if (params.surveyId !== null) {
        const result = await dispatch(feathers.survey.get({ surveyId: params.surveyId }));

        if (result.error) {
          return toast.error(result.error);
        }

        setSurveyInformation({
          name: result.payload.name,
          open: result.payload.open,
          protection: result.payload.protection,
        });
      }
    };

    loadSurveyInformation();
  }, [params.surveyId, dispatch]);

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
