import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

import { SurveyBuilderForm } from '../features/survey';

import { feathers } from '../redux';

const SurveyCreatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitSurvey = async (survey) => {
    try {
      const result = await dispatch(feathers.survey.create({ data: survey }));

      toast.success('Survey successfully created', { toastId: 'success-create-survey' });
      navigate(`/surveys/${result.payload._id}/form`);
    } catch (error) {
      toast.error(error.message, { toastId: 'error-create-survey' });
    }
  };

  useDocumentTitle('Create survey');

  return (
    <Grid container sx={{ justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
        <SurveyBuilderForm onSubmitSurvey={handleSubmitSurvey} />
      </Grid>
    </Grid>
  );
};

export default SurveyCreatePage;
