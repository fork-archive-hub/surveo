import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

import Spinner from '../components/elements/Spinner';
import { SurveyEditorForm, useGetSurveyQuery, useSurveyAuthorValidator } from '../features/survey';

import { feathers } from '../redux';

const SurveyEditPage = () => {
  const user = useSelector((state) => state.authentication.user);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { survey, isLoading, isError } = useGetSurveyQuery(params.surveyId);

  const handleUpdateSurvey = async (data) => {
    try {
      await dispatch(feathers.survey.patch({ surveyId: params.surveyId, data: data }));

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

  useSurveyAuthorValidator(survey._id === params.surveyId, survey, user, '/');
  useDocumentTitle('Edit survey');

  return (
    <Grid container sx={{ justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
        {isLoading && <Spinner />}
        {Boolean(survey._id) && !isLoading && !isError && (
          <SurveyEditorForm survey={survey} onUpdateSurvey={handleUpdateSurvey} />
        )}
      </Grid>
    </Grid>
  );
};

export default SurveyEditPage;
