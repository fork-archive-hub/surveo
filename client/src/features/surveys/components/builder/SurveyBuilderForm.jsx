import PropTypes from 'prop-types';

import { Box, Stack, Divider } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import ConfigurationFieldset from './ConfigurationFieldset';
import CreateQuestionFieldsetGroup from './CreateQuestionFieldsetGroup';

import { surveyFormSchema } from '../../schemas';
import { SurveyTemplate } from '../../templates';

import { SubmitButton } from '../../../../components/form';

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
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} sx={{ width: 1 }}>
        <Stack direction="column" spacing={2} divider={<Divider />}>
          <ConfigurationFieldset />
          <CreateQuestionFieldsetGroup name="questions" />
          <SubmitButton>Create survey</SubmitButton>
        </Stack>
      </Box>
    </FormProvider>
  );
};

SurveyBuilderForm.propTypes = {
  onSubmitSurvey: PropTypes.func.isRequired,
};

export default SurveyBuilderForm;
