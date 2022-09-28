import PropTypes from 'prop-types';

import { Box, Stack, Divider } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import SurveyConfiguration from './SurveyConfiguration';
import NewQuestionManager from './NewQuestionManager';

import { SurveySchema } from '../../schemas/SurveySchema';
import { SurveyTemplate } from '../../templates/SurveyTemplate';

import { SubmitButton } from '../../../../components/form';

const SurveyBuilderForm = ({ onSubmitSurvey }) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: new SurveyTemplate(),
    resolver: joiResolver(SurveySchema),
  });

  const onSubmit = (data) => {
    if (onSubmitSurvey) {
      onSubmitSurvey(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} sx={{ width: 1 }}>
        <Stack direction="column" spacing={2} divider={<Divider />}>
          <SurveyConfiguration />
          <NewQuestionManager name="questions" />
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
