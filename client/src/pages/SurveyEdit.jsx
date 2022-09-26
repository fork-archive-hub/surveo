import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid, Box } from '@mui/material';

import { toast } from 'react-toastify';

import { useSurvey } from '../hooks';

import { Spinner } from '../components/elements';
import { SurveyEditorForm } from '../features/surveys';

import { feathers } from '../redux';

const SurveyEdit = () => {
  const user = useSelector((state) => state.authentication.user);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const { survey, isLoading } = useSurvey(params.surveyId);

  const handleUpdateSurvey = async (data) => {
    const result = await dispatch(
      feathers.survey.patch({
        surveyId: params.surveyId,
        data: data,
      })
    );

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Survey updated');
    }

    navigate('/');
  };

  useEffect(() => {
    const validateSurveyAuthor = () => {
      if (Boolean(survey._id) && survey.authorId !== user._id) {
        toast.error('You cannot edit this survey');
        navigate('/');
      }
    };

    validateSurveyAuthor();
  }, [survey._id, survey.authorId, user._id, navigate]);

  return (
    <Grid container justifyContent="center" sx={{ py: 2 }}>
      <Grid container item xs={12} sm={8} md={5} lg={4} xl={3}>
        <Box sx={{ width: 1 }}>
          {isLoading && <Spinner />}
          {Boolean(survey._id) && !isLoading && (
            <SurveyEditorForm survey={survey} onUpdateSurvey={handleUpdateSurvey} />
          )}
        </Box>
      </Grid>
    </Grid>
  );
};

export default SurveyEdit;
