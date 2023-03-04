import PropTypes from 'prop-types';

import { Stack, Divider, Box } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';

import SurveyHeader from './SurveyHeader';
import QuestionList from './QuestionList';

import SubmitButton from '../../../../components/form/SubmitButton';

const SurveyQuestionnaireForm = ({ survey, isFormDisabled, onSubmitVotes }) => {
  const form = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    if (onSubmitVotes && !isFormDisabled) {
      onSubmitVotes(data);
    }
  };

  return (
    <Stack>
      <SurveyHeader name={survey.name} author={survey.author.username} createdAt={survey.createdAt} />
      <Divider />
      <FormProvider {...form}>
        <Box component="form" onSubmit={form.handleSubmit(onSubmit)}>
          <Stack>
            <QuestionList questions={survey.questions} />
            <SubmitButton disabled={!survey.open || isFormDisabled}>Submit</SubmitButton>
          </Stack>
        </Box>
      </FormProvider>
    </Stack>
  );
};

SurveyQuestionnaireForm.propTypes = {
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

export default SurveyQuestionnaireForm;
