import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle } from '../hooks';

import { SurveySheetBuilderForm } from '../features/surveys';

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

  useDocumentTitle('Create survey');

  return (
    <Grid container sx={{ justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
        <SurveySheetBuilderForm onSubmitSurvey={handleSubmitSurvey} />
      </Grid>
    </Grid>
  );
};

export default SurveyCreate;
