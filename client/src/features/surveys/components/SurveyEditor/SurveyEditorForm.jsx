import PropTypes from 'prop-types';

import { Box, Stack } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import ConfigurationFieldset from '../SurveyBuilder/ConfigurationFieldset';

import { surveyInformationFormSchema } from '../../schemas';

import { SubmitButton } from '../../../../components/Form';

const SurveyEditorForm = ({ survey, onUpdateSurvey }) => {
  const methods = useForm({
    mode: 'all',
    defaultValues: {
      name: survey.name,
      open: survey.open,
      protection: survey.protection,
    },
    resolver: joiResolver(surveyInformationFormSchema),
  });

  const onSubmit = async (data) => {
    if (onUpdateSurvey) {
      onUpdateSurvey(data);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box sx={{ width: 1 }}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={2}>
            <ConfigurationFieldset />
            <SubmitButton>Save</SubmitButton>
          </Stack>
        </form>
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
