import PropTypes from 'prop-types';

import { Box, Stack, Divider } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import SurveyConfiguration from './SurveyConfiguration';
import QuestionSetBuilder from './QuestionSetBuilder';

import { SurveySchema } from '../../schemas/SurveySchema';
import { SurveyTemplate } from '../../templates/SurveyTemplate';

import SubmitButton from '../../../../components/form/SubmitButton';

const SurveyBuilderForm = ({ onSubmitSurvey }) => {
  const form = useForm({
    mode: 'all',
    defaultValues: new SurveyTemplate(),
    resolver: joiResolver(SurveySchema),
  });
  const { isValid, isDirty } = form.formState;

  const onSubmit = (data) => {
    if (isValid && isDirty) {
      onSubmitSurvey(data);
    }
  };

  return (
    <FormProvider {...form}>
      <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
        <Stack divider={<Divider />}>
          <SurveyConfiguration />
          <QuestionSetBuilder path="questions" />
          <SubmitButton disabled={!(isValid && isDirty)}>Create survey</SubmitButton>
        </Stack>
      </Box>
    </FormProvider>
  );
};

SurveyBuilderForm.propTypes = {
  onSubmitSurvey: PropTypes.func.isRequired,
};

export default SurveyBuilderForm;
