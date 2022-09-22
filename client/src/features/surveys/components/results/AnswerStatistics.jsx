import PropTypes from 'prop-types';

import { Box, Typography, LinearProgress } from '@mui/material';

const AnswerStatistics = ({ answer, totalVotes }) => {
  const votePercentage = (answer.votes / (totalVotes || 1)) * 100;

  return (
    <Box>
      <Typography variant="body1">{answer.text}</Typography>
      <Typography variant="caption">
        {answer.votes} vote{answer.votes === 1 ? '' : 's'} ({votePercentage.toFixed(2)}%)
      </Typography>
      <LinearProgress variant="determinate" value={votePercentage} sx={{ height: 5, borderRadius: 1 }} />
    </Box>
  );
};

AnswerStatistics.propTypes = {
  answer: PropTypes.shape({
    text: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
  totalVotes: PropTypes.number.isRequired,
};

export default AnswerStatistics;
