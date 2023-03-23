import PropTypes from 'prop-types';

import { Box, Stack } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import SurveyConfiguration from '../builder/SurveyConfiguration';

import { SurveyInformationSchema } from '../../schemas/SurveyInformationSchema';

import SubmitButton from '../../../../components/form/SubmitButton';

const SurveyEditorForm = ({ survey, onUpdateSurvey }) => {
  const form = useForm({
    mode: 'all',
    defaultValues: {
      name: survey.name,
      open: survey.open,
      protection: survey.protection,
    },
    resolver: joiResolver(SurveyInformationSchema),
  });
  const { isValid, isDirty } = form.formState;

  const onSubmit = async (data) => {
    if (isValid && isDirty) {
      onUpdateSurvey(data);
    }
  };

  return (
    <FormProvider {...form}>
      <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
        <Stack>
          <SurveyConfiguration />
          <SubmitButton disabled={!(isValid && isDirty)}>Save</SubmitButton>
        </Stack>
      </Box>
    </FormProvider>
  );
};

SurveyEditorForm.propTypes = {
  survey: PropTypes.shape({
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    protection: PropTypes.object.isRequired,
  }).isRequired,
  onUpdateSurvey: PropTypes.func.isRequired,
};

export default SurveyEditorForm;
