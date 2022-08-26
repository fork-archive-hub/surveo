import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import SurveyStackItem from './SurveyStackItem';

const SurveyStack = ({ surveys, onSurveyActionRequest }) => {
  const handleSurveyButtonClick = (action, surveyId) => {
    if (onSurveyActionRequest) {
      onSurveyActionRequest(action, surveyId);
    }
  };

  return (
    <Stack spacing={2} sx={{ width: 1 }}>
      {surveys.map((survey) => (
        <SurveyStackItem key={survey._id} survey={survey} onButtonClick={handleSurveyButtonClick} />
      ))}
    </Stack>
  );
};

SurveyStack.propTypes = {
  surveys: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ),
  onSurveyActionRequest: PropTypes.func.isRequired,
};

export default SurveyStack;
