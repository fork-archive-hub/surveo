import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { SurveyBuilderForm } from '../features/surveys';

import { feathers } from '../redux';

const SurveyCreate = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmitSurvey = async (survey) => {
    const result = await dispatch(feathers.survey.create({ data: survey }));

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Survey successfully created');
    }

    navigate('/');
  };

  return (
    <Grid container justifyContent="center" sx={{ py: 2 }}>
      <Grid container item xs={12} sm={8} md={5} lg={4} xl={3}>
        <SurveyBuilderForm onSubmitSurvey={onSubmitSurvey} />
      </Grid>
    </Grid>
  );
};

export default SurveyCreate;
