import { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

import Spinner from '../components/elements/Spinner';
import { SurveyEditorForm, useGetSurveyQuery, useSurveyAuthorValidator } from '../features/survey';

import { feathers } from '../api/feathers';

const SurveyEditPage = () => {
  const user = useSelector((state) => state.authentication.user);

  const params = useParams();
  const navigate = useNavigate();

  const { survey, isLoading, isError } = useGetSurveyQuery(params.surveyId);

  const handleUpdateSurvey = async (data) => {
    try {
      await feathers.client.service('surveys').patch(params.surveyId, data);

      toast.success('Survey updated', { toastId: 'success-update-survey' });
      navigate('/');
    } catch (error) {
      toast.error(error.message, { toastId: 'error-update-survey' });
    }
  };

  useEffect(() => {
    if (!isLoading && isError) {
      navigate('/');
    }
  }, [isLoading, isError, navigate]);

  useSurveyAuthorValidator(survey._id === params.surveyId, survey.author?._id, user._id, '/');
  useDocumentTitle('Edit survey');

  return (
    <Grid container sx={{ justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3.5}>
        {isLoading && <Spinner />}
        {Boolean(survey._id) && !isLoading && !isError && (
          <SurveyEditorForm survey={survey} onUpdateSurvey={handleUpdateSurvey} />
        )}
      </Grid>
    </Grid>
  );
};

export default SurveyEditPage;
