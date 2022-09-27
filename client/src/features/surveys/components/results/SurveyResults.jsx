import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import SurveyHeader from '../form/SurveyHeader';
import QuestionResultsGroup from './QuestionResultsGroup';

const SurveyResults = ({ survey }) => {
  return (
    <Stack direction="column" spacing={2} sx={{ width: 1 }}>
      <SurveyHeader name={survey.name} author={survey.author.username} createdAt={survey.createdAt} />
      <QuestionResultsGroup questions={survey.questions} />
    </Stack>
  );
};

SurveyResults.propTypes = {
  survey: PropTypes.shape({
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    questions: PropTypes.array.isRequired,
  }),
};

export default SurveyResults;
