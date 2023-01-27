import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import AnswerResult from './AnswerResult';

const AnswerResultStack = ({ answers }) => {
  const totalVotes = answers.reduce((acc, answer) => acc + answer.votes, 0);
  const sortedAnswers = answers.slice().sort((a, b) => b.votes - a.votes);

  return (
    <Stack>
      {sortedAnswers.map((answer) => (
        <AnswerResult key={answer._id} answer={answer} totalVotes={totalVotes} />
      ))}
    </Stack>
  );
};

AnswerResultStack.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default AnswerResultStack;
