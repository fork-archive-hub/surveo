import PropTypes from 'prop-types';

import { Stack, Divider, Box } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';

import SurveyHeader from './SurveyHeader';
import QuestionGroup from './QuestionGroup';

import { SubmitButton } from '../../../../components/form';

const SurveyForm = ({ survey, disableForm, onSubmitVotes }) => {
  const methods = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    if (onSubmitVotes && !disableForm) {
      onSubmitVotes(data);
    }
  };

  return (
    <Stack direction="column" spacing={2} sx={{ width: 1 }}>
      <SurveyHeader name={survey.name} author={survey.author.username} createdAt={survey.createdAt} />
      <Divider />
      <FormProvider {...methods}>
        <Box component="form" onSubmit={methods.handleSubmit(onSubmit)} sx={{ width: 1 }}>
          <Stack direction="column" spacing={2}>
            <QuestionGroup questions={survey.questions} />
            <SubmitButton disabled={!survey.open || disableForm}>Submit</SubmitButton>
          </Stack>
        </Box>
      </FormProvider>
    </Stack>
  );
};

SurveyForm.propTypes = {
  survey: PropTypes.shape({
    name: PropTypes.string.isRequired,
    open: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    questions: PropTypes.array.isRequired,
  }),
  disableForm: PropTypes.bool.isRequired,
  onSubmitVotes: PropTypes.func.isRequired,
};

export default SurveyForm;