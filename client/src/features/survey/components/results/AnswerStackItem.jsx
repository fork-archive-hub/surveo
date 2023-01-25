import PropTypes from 'prop-types';

import { Box, Stack, Typography, LinearProgress } from '@mui/material';

import { findImageMarkdown } from '../../utils/findImageMarkdown';

import Image from '../../../../components/elements/Image';

const AnswerStackItem = ({ answer, totalVotes }) => {
  const image = findImageMarkdown(answer.text);
  const votePercentage = (answer.votes / (totalVotes || 1)) * 100;

  return (
    <Box>
      <Stack spacing={0} sx={{ alignItems: 'flex-start' }}>
        <Typography variant="body1">{image.found ? image.title : answer.text}</Typography>
        {image.found && <Image url={image.url} title={image.title} />}
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
