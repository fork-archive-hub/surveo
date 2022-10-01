import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import SurveyBar from './SurveyBar';

const SurveyBarList = ({ surveys }) => {
  return (
    <Stack spacing={2} sx={{ width: 1 }}>
      {surveys.map((survey) => (
        <SurveyBar key={survey._id} survey={survey} />
      ))}
    </Stack>
  );
};

SurveyBarList.propTypes = {
  surveys: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ),
};

export default SurveyBarList;
