import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import ReportHeader from './ReportHeader';
import QuestionResultsGroup from './QuestionResultsGroup';

const SurveyResultCharts = ({ survey }) => {
  return (
    <Stack direction="column" spacing={2} sx={{ width: 360 }}>
      <ReportHeader name={survey.name} surveyId={survey._id} />
      <QuestionResultsGroup questions={survey.questions} />
    </Stack>
  );
};

SurveyResultCharts.propTypes = {
  survey: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    questions: PropTypes.array.isRequired,
  }),
};

export default SurveyResultCharts;
