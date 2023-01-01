import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import SurveyHeader from '../sheet/SurveyHeader';
import QuestionResultStack from './QuestionResultStack';

const SurveyResults = ({ survey }) => {
  return (
    <Stack>
      <SurveyHeader name={survey.name} author={survey.author.username} createdAt={survey.createdAt} />
      <QuestionResultStack questions={survey.questions} />
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
