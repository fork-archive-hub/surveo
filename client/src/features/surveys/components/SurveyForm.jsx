import PropTypes from 'prop-types';

import { Stack, Divider, Button } from '@mui/material';

import { useForm, FormProvider } from 'react-hook-form';

import SurveyHeader from './SurveyHeader';
import QuestionFormManager from './QuestionFormManager';

const SurveyForm = ({ survey, onSubmitVotes }) => {
  const methods = useForm({ mode: 'all' });

  const onSubmit = (data) => {
    if (onSubmitVotes) {
      onSubmitVotes(data);
    }
  };

  return (
    <Stack direction="column" spacing={2} sx={{ width: 360 }}>
      <SurveyHeader name={survey.name} author={survey.author.username} createdAt={survey.createdAt} />
      <Divider />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={2}>
            <QuestionFormManager questions={survey.questions} />
            <Button type="submit" variant="contained" disabled={!survey.open}>
              Submit
            </Button>
          </Stack>
        </form>
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
  onSubmitVotes: PropTypes.func.isRequired,
};

export default SurveyForm;
