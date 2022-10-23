import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import SurveySheetHeader from '../form/SurveySheetHeader';
import QuestionResultStack from './QuestionResultStack';

const SurveySheetResults = ({ survey }) => {
  return (
    <Stack direction="column" spacing={2} sx={{ width: 1 }}>
      <SurveySheetHeader name={survey.name} author={survey.author.username} createdAt={survey.createdAt} />
      <QuestionResultStack questions={survey.questions} />
    </Stack>
  );
};

SurveySheetResults.propTypes = {
  survey: PropTypes.shape({
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    author: PropTypes.shape({
      username: PropTypes.string.isRequired,
    }).isRequired,
    questions: PropTypes.array.isRequired,
  }),
};

export default SurveySheetResults;
