import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { useGetSurveyQuery } from '../hooks/useGetSurveyQuery';

import Spinner from '../components/elements/Spinner';
import { SurveyEditorForm } from '../features/survey';

import { feathers } from '../redux';

const SurveyEditPage = () => {
  const user = useSelector((state) => state.authentication.user);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { survey, isLoading, isError } = useGetSurveyQuery(params.surveyId);

  const handleUpdateSurvey = async (data) => {
    const result = await dispatch(
      feathers.survey.patch({
        surveyId: params.surveyId,
        data: data,
      })
    );

    if (result.error) {
      toast.error(result.error);
      navigate('/');
      return;
    }

    toast.success('Survey updated');
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

      if (survey.authorId !== user._id) {
        toast.error('You are not authorized to edit this survey');
        navigate('/');
      }
    };

    validateSurveyAuthor();
  }, [survey._id, survey.authorId, user._id, navigate]);

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
