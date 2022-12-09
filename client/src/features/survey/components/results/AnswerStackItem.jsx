import PropTypes from 'prop-types';

import { Box, Stack, Typography, LinearProgress } from '@mui/material';

import { findImageMarkdown } from '../../utils/findImageMarkdown';

const AnswerStackItem = ({ answer, totalVotes }) => {
  const image = findImageMarkdown(answer.text);
  const votePercentage = (answer.votes / (totalVotes || 1)) * 100;

  return (
    <Box>
      <Stack spacing={0} sx={{ alignItems: 'flex-start' }}>
        <Typography variant="body1">{image.found ? image.title : answer.text}</Typography>
        {image.found && (
          <Box component="img" loading="lazy" src={image.url} alt={image.title} sx={{ maxWidth: 1, borderRadius: 1 }} />
        )}
      </Stack>
      <Typography variant="caption">
        {answer.votes} vote{answer.votes === 1 ? '' : 's'} ({votePercentage.toFixed(2)}%)
      </Typography>
      <LinearProgress variant="determinate" value={votePercentage} sx={{ height: 5, borderRadius: 1 }} />
    </Box>
  );
};

AnswerStackItem.propTypes = {
  answer: PropTypes.shape({
    text: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
  totalVotes: PropTypes.number.isRequired,
};

export default AnswerStackItem;
