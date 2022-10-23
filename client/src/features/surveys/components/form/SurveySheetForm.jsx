import PropTypes from 'prop-types';

import { Stack, Divider, Box } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';

import SurveySheetHeader from './SurveySheetHeader';
import QuestionStack from './QuestionStack';

import { SubmitButton } from '../../../../components/form';

const SurveySheetForm = ({ survey, isFormDisabled, onSubmitVotes }) => {
  const methods = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    if (onSubmitVotes && !isFormDisabled) {
      onSubmitVotes(data);
    }
  };

  return (
    <Stack sx={{ width: 1 }}>
      <SurveySheetHeader name={survey.name} author={survey.author.username} createdAt={survey.createdAt} />
      <Divider />
      <FormProvider {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} sx={{ width: 1 }}>
          <Stack>
            <QuestionStack questions={survey.questions} />
            <SubmitButton disabled={!survey.open || isFormDisabled}>Submit</SubmitButton>
          </Stack>
        </Box>
      </FormProvider>
    </Stack>
  );
};

SurveySheetForm.propTypes = {
  survey: PropTypes.shape({
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    questions: PropTypes.array.isRequired,
  }),
  isFormDisabled: PropTypes.bool.isRequired,
  onSubmitVotes: PropTypes.func.isRequired,
};

export default SurveySheetForm;
