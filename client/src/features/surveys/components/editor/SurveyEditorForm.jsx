import PropTypes from 'prop-types';

import { Box, Stack } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import ConfigurationFieldset from '../builder/ConfigurationFieldset';

import { SurveyInformationSchema } from '../../schemas/SurveyInformationSchema';

import { SubmitButton } from '../../../../components/form';

const SurveyEditorForm = ({ survey, onUpdateSurvey }) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      name: survey.name,
      open: survey.open,
      protection: survey.protection,
    },
    resolver: joiResolver(SurveyInformationSchema),
  });

  const onSubmit = async (data) => {
    if (onUpdateSurvey) {
      onUpdateSurvey(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} sx={{ width: 1 }}>
        <Stack direction="column" spacing={2}>
          <ConfigurationFieldset />
          <SubmitButton>Save</SubmitButton>
        </Stack>
      </Box>
    </FormProvider>
  );
};

SurveyEditorForm.propTypes = {
  survey: PropTypes.shape({
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    protection: PropTypes.shape({
      captcha: PropTypes.bool.isRequired,
      ipRestriction: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  onUpdateSurvey: PropTypes.func.isRequired,
};

export default SurveyEditorForm;