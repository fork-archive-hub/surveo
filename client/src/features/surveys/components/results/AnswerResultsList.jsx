import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import AnswerResults from './AnswerResults';

const AnswerResultsList = ({ answers, totalVotes }) => {
  const sortedAnswers = answers.slice().sort((a, b) => b.votes - a.votes);

  return (
    <Stack direction="column" spacing={2}>
      {sortedAnswers.map((answer) => (
        <AnswerResults key={answer._id} answer={answer} totalVotes={totalVotes} />
      ))}
    </Stack>
  );
};

AnswerResultsList.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  totalVotes: PropTypes.number.isRequired,
};

export default AnswerResultsList;
