import PropTypes from 'prop-types';

import { Stack, Typography } from '@mui/material';

import { findImageMarkdown } from '../../utils/findImageMarkdown';

import FormControlLabel from '../../../../components/form/FormControlLabel';
import Radio from '../../../../components/form/Radio';
import Image from '../../../../components/elements/Image';

const Answer = ({ answer }) => {
  const image = findImageMarkdown(answer.text);

  if (!image.found) {
    return (
      <FormControlLabel
        key={answer._id}
        label={answer.text}
        control={<Radio size="small" value={answer._id} required />}
      />
    );
  }

  return (
    <FormControlLabel
      key={answer._id}
      label={
        <Stack spacing={0}>
          <Typography variant="body1">{image.title}</Typography>
          <Image url={image.url} title={image.title} />
        </Stack>
      }
      control={<Radio size="small" value={answer._id} required />}
      sx={{ mb: 1 }}
    />
  );
};

Answer.propTypes = {
  answer: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Answer;
