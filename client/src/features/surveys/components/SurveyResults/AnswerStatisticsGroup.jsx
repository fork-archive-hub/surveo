import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import AnswerStatistics from './AnswerStatistics';

const AnswerStatisticsGroup = ({ answers, totalVotes }) => {
  const sortedAnswers = answers.slice().sort((a, b) => b.votes - a.votes);

  return (
    <Stack direction="column" spacing={2}>
      {sortedAnswers.map((answer) => (
        <AnswerStatistics key={answer._id} answer={answer} totalVotes={totalVotes} />
      ))}
    </Stack>
  );
};

AnswerStatisticsGroup.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  totalVotes: PropTypes.number.isRequired,
};

export default AnswerStatisticsGroup;
