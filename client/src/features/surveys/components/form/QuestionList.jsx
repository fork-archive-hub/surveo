import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import Question from './Question';

const QuestionList = ({ questions }) => {
  return (
    <Stack direction="column" spacing={2}>
      {questions.map((question) => (
        <Question key={question._id} question={question} />
      ))}
    </Stack>
  );
};

QuestionList.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default QuestionList;
