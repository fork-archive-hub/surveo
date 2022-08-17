import PropTypes from 'prop-types';

import { Paper, Typography } from '@mui/material';

import { convertDateToHumanFormat } from '../../utils/convertDateToHumanFormat';

const SurveyHeader = ({ name, author, createdAt }) => {
  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h5" display="block" align="center">
        {name}
      </Typography>
      <Typography variant="caption" display="block" align="center">
        Created by {author} on {convertDateToHumanFormat(createdAt)}.
      </Typography>
    </Paper>
  );
};

SurveyHeader.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default SurveyHeader;
