import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

import Spinner from '../components/elements/Spinner';
import { SurveyDeleteDialog, useGetSurveyQuery } from '../features/survey';

import { feathers } from '../redux';

const SurveyDeletePage = () => {
  const user = useSelector((state) => state.authentication.user);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { survey, isLoading, isError } = useGetSurveyQuery(params.surveyId);

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

  useEffect(() => {
    if (!isLoading && isError) {
      navigate('/');
    }
  }, [isLoading, isError, navigate]);

  useEffect(() => {
    const validateSurveyAuthor = () => {
      if (!survey._id) {
        return;
      }

      if (survey._id === params.surveyId && survey.authorId !== user._id) {
        toast.error('You are not authorized to delete this survey');
        navigate('/');
      }
    };

    validateSurveyAuthor();
  }, [survey._id, params.surveyId, survey.authorId, user._id, navigate]);

  useDocumentTitle('Delete survey');

  return (
    <Grid container sx={{ justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
        {isLoading && <Spinner />}
        {Boolean(survey._id) && !isLoading && !isError && (
          <SurveyDeleteDialog onDeleteSurvey={handleDelete} onCancelAction={handleCancel} />
        )}
      </Grid>
    </Grid>
  );
};

export default SurveyDeletePage;
