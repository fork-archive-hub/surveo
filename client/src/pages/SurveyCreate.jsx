import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { SurveyBuilderForm } from '../features/surveys';

import { feathers } from '../redux';

const SurveyCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitSurvey = async (survey) => {
    const result = await dispatch(feathers.survey.create({ data: survey }));

    if (result.error) {
      toast.error(result.error);
      navigate('/');
    } else {
      toast.success('Survey successfully created');
      navigate(`/surveys/${result.payload._id}/form`);
    }
  };

  return (
    <Grid container justifyContent="center" sx={{ py: 2 }}>
      <Grid container item xs={12} sm={8} md={5} lg={4} xl={3}>
        <SurveyBuilderForm onSubmitSurvey={handleSubmitSurvey} />
      </Grid>
    </Grid>
  );
};

export default SurveyCreate;
