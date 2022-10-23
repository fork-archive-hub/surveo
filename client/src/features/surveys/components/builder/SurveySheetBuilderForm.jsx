import PropTypes from 'prop-types';

import { Box, Stack, Divider } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';

import SurveyConfiguration from './SurveyConfiguration';
import QuestionBuilderStack from './QuestionBuilderStack';

import { SurveySchema } from '../../schemas/SurveySchema';
import { SurveyTemplate } from '../../templates/SurveyTemplate';

import { SubmitButton } from '../../../../components/form';

const SurveySheetBuilderForm = ({ onSubmitSurvey }) => {
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
        <Stack divider={<Divider />}>
          <SurveyConfiguration />
          <QuestionBuilderStack path="questions" />
          <SubmitButton>Create survey</SubmitButton>
        </Stack>
      </Box>
    </FormProvider>
  );
};

SurveySheetBuilderForm.propTypes = {
  onSubmitSurvey: PropTypes.func.isRequired,
};

export default SurveySheetBuilderForm;
