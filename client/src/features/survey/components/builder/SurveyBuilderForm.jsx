import PropTypes from 'prop-types';

import { Box, Stack, Divider } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import SurveyConfiguration from './SurveyConfiguration';
import QuestionBuilderStack from './QuestionBuilderStack';

import { SurveySchema } from '../../schemas/SurveySchema';
import { SurveyTemplate } from '../../templates/SurveyTemplate';

import SubmitButton from '../../../../components/form/SubmitButton';

const SurveyBuilderForm = ({ onSubmitSurvey }) => {
  const form = useForm({
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
    <FormProvider {...form}>
      <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
        <Stack divider={<Divider />}>
          <SurveyConfiguration />
          <QuestionBuilderStack path="questions" />
          <SubmitButton disabled={!form.formState.isValid || !form.formState.isDirty}>Create survey</SubmitButton>
        </Stack>
      </Box>
    </FormProvider>
  );
};

SurveyBuilderForm.propTypes = {
  onSubmitSurvey: PropTypes.func.isRequired,
};

export default SurveyBuilderForm;
