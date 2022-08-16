import PropTypes from 'prop-types';

import { Stack, Divider, Button } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';
import { surveyFormSchema } from '../schemas';

import SurveyInformationForm from './SurveyInformationForm';
import CreateQuestionFormManager from './CreateQuestionFormManager';

import { SurveyTemplate } from '../templates';

const CreateSurveyForm = ({ onSubmitSurvey }) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: new SurveyTemplate(),
    resolver: joiResolver(surveyFormSchema),
  });

  const onSubmit = async (data) => {
    if (onSubmitSurvey) {
      onSubmitSurvey(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2} divider={<Divider />} sx={{ width: 360 }}>
          <SurveyInformationForm />
          <CreateQuestionFormManager name="questions" />
          <Button type="submit" variant="contained">
            Create survey
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};

CreateSurveyForm.propTypes = {
  onSubmitSurvey: PropTypes.func.isRequired,
};

export default CreateSurveyForm;
