import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

import Spinner from '../components/elements/Spinner';
import { SurveyDeleteDialog, useGetSurveyQuery, useSurveyAuthorValidator } from '../features/survey';

import { feathers } from '../api/feathers';

const SurveyDelete = () => {
  const user = useSelector((state) => state.authentication.user);

  const params = useParams();
  const navigate = useNavigate();

  const { survey, isLoading, isError } = useGetSurveyQuery(params.surveyId);

  const handleCancel = () => {
    navigate('/');
  };

  const handleDelete = async () => {
    try {
      if (params.surveyId === null) {
        return;
      }

      await feathers.client.service('surveys').remove(params.surveyId);

      toast.success('Survey deleted', { toastId: 'success-delete-survey' });
      navigate('/');
    } catch (error) {
      toast.error(error.message, { toastId: 'error-delete-survey' });
    }
  };

  useEffect(
    function fallbackToMainPage() {
      if (!isLoading && isError) {
        navigate('/');
      }
    },
    [isLoading, isError, navigate]
  );

  useSurveyAuthorValidator(survey._id === params.surveyId, survey.author?._id, user._id, '/');
  useDocumentTitle('Delete survey');

  return (
    <Grid container sx={{ justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3.5}>
        {isLoading && <Spinner />}
        {Boolean(survey._id) && !isLoading && !isError && (
          <SurveyDeleteDialog onDeleteSurvey={handleDelete} onCancelAction={handleCancel} />
        )}
      </Grid>
    </Grid>
  );
};

export default SurveyDelete;
