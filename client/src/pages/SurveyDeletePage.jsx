import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle } from '../hooks';

import { SurveyDeleteDialog } from '../features/survey';

import { feathers } from '../redux';

const SurveyDeletePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
  };

  const handleDelete = async () => {
    if (params.surveyId === null) {
      return;
    }

    const result = await dispatch(feathers.survey.remove({ surveyId: params.surveyId }));

    if (result.error) {
      toast.error(result.error);
      navigate('/');
      return;
    }

    toast.success('Survey deleted');
    navigate('/');
  };

  useDocumentTitle('Delete survey');

  return (
    <Grid container sx={{ justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
        <SurveyDeleteDialog onDeleteSurvey={handleDelete} onCancelAction={handleCancel} />
      </Grid>
    </Grid>
  );
};

export default SurveyDeletePage;
