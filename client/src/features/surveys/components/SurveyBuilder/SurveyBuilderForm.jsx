import PropTypes from 'prop-types';

import { Stack, Divider } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import SurveyConfigurationFieldset from './SurveyConfigurationFieldset';
import CreateQuestionFieldsetGroup from './CreateQuestionFieldsetGroup';

import { surveyFormSchema } from '../../schemas';
import { SurveyTemplate } from '../../templates';

import { SubmitButton } from '../../../../components/Form';

const SurveyBuilderForm = ({ onSubmitSurvey }) => {
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
          <SurveyConfigurationFieldset />
          <CreateQuestionFieldsetGroup name="questions" />
          <SubmitButton>Create survey</SubmitButton>
        </Stack>
      </form>
    </FormProvider>
  );
};

SurveyBuilderForm.propTypes = {
  onSubmitSurvey: PropTypes.func.isRequired,
};

export default SurveyBuilderForm;
