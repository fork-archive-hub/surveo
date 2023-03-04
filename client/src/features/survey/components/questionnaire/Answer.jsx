import PropTypes from 'prop-types';

import { Stack, Typography, useRadioGroup, alpha } from '@mui/material';

import { findImageMarkdown } from '../../utils/findImageMarkdown';

import FormControlLabel from '../../../../components/form/FormControlLabel';
import Radio from '../../../../components/form/Radio';
import Image from '../../../../components/elements/Image';

const Answer = ({ answer }) => {
  const radioGroup = useRadioGroup();

  const isChecked = radioGroup.value === answer._id;
  const image = findImageMarkdown(answer.text);

  return (
    <FormControlLabel
      key={answer._id}
      label={
        <Stack spacing={0} sx={{ py: 1, '& > img': { mr: 1 } }}>
          <Typography variant="body1">{image.found ? image.title : answer.text}</Typography>
          {image.found && <Image url={image.url} title={image.title} />}
        </Stack>
      }
      control={<Radio size="small" value={answer._id} required />}
      sx={{
        borderRadius: 1,
        color: (theme) => (isChecked ? theme.palette.primary.main : theme.palette.text.primary),
        background: (theme) => (isChecked ? alpha(theme.palette.primary.main, 0.05) : 'transparent'),
        border: (theme) => (isChecked ? `1px solid ${theme.palette.primary.main}` : '1px solid transparent'),
      }}
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
