import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import QuestionForm from './QuestionForm';

const QuestionFormManager = ({ questions }) => {
  return (
    <Stack direction="column" spacing={2}>
      {questions.map((question) => (
        <QuestionForm key={question._id} question={question} />
      ))}
    </Stack>
  );
};

QuestionFormManager.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default QuestionFormManager;
