import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import Question from './Question';

const QuestionStack = ({ questions }) => {
  return (
    <Stack>
      {questions.map((question) => (
        <Question key={question._id} question={question} />
      ))}
    </Stack>
  );
};

QuestionStack.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default QuestionStack;
