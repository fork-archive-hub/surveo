import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Stack, Divider, Button } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';
import { toast } from 'react-toastify';

import { joiResolver } from '@hookform/resolvers/joi';
import { surveyFormSchema } from '../schemas';

import SurveyInformationForm from './SurveyInformationForm';
import QuestionFormManager from './QuestionFormManager';

import { SurveyTemplate } from '../templates';

import { feathers } from '../../../redux';

const CreateSurveyForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const methods = useForm({
    mode: 'all',
    defaultValues: new SurveyTemplate(),
    resolver: joiResolver(surveyFormSchema),
  });

  const onSubmit = async (data) => {
    await dispatch(feathers.survey.create({ data: data }));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2} divider={<Divider />} sx={{ width: 360 }}>
          <SurveyInformationForm />
          <QuestionFormManager name="questions" />
          <Button type="submit" variant="contained">
            Create survey
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

export default CreateSurveyForm;
