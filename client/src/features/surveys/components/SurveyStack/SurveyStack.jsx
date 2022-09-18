import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import SurveyStackItem from './SurveyStackItem';

const SurveyStack = ({ surveys, onPreviewSurvey, onViewSurveyResults, onEditSurvey, onDeleteSurvey }) => {
  return (
    <Stack spacing={2} sx={{ width: 1 }}>
      {surveys.map((survey) => (
        <SurveyStackItem
          key={survey._id}
          survey={survey}
          onPreviewSurvey={onPreviewSurvey}
          onViewSurveyResults={onViewSurveyResults}
          onEditSurvey={onEditSurvey}
          onDeleteSurvey={onDeleteSurvey}
        />
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
  onPreviewSurvey: PropTypes.func.isRequired,
  onViewSurveyResults: PropTypes.func.isRequired,
  onEditSurvey: PropTypes.func.isRequired,
  onDeleteSurvey: PropTypes.func.isRequired,
};

export default SurveyStack;
