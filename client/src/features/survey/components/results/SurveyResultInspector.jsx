import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import SurveyHeader from '../questionnaire/SurveyHeader';
import QuestionResultsList from './QuestionResultsList';

const SurveyResultInspector = ({ survey }) => {
  return (
    <Stack>
      <SurveyHeader name={survey.name} author={survey.author.username} createdAt={survey.createdAt} />
      <QuestionResultsList questions={survey.questions} />
    </Stack>
  );
};

SurveyResultInspector.propTypes = {
  survey: PropTypes.shape({
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    questions: PropTypes.array.isRequired,
  }),
};

export default SurveyResultInspector;
