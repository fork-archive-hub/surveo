import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Paper } from '@mui/material';

import { sumQuestionVotes } from '../../utils/sumQuestionVotes';

import AnswerResultStack from './AnswerResultStack';

const QuestionResult = ({ question }) => {
  const totalVotes = sumQuestionVotes(question);

  return (
    <Card>
      <CardHeader
        title={question.text}
        subheader={`${totalVotes} vote${totalVotes === 1 ? '' : 's'}`}
        titleTypographyProps={{ variant: 'h6', display: 'block', align: 'center' }}
        subheaderTypographyProps={{ variant: 'caption', display: 'block', align: 'center' }}
      />
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Paper elevation={2} sx={{ width: 1, p: 2 }}>
          <AnswerResultStack answers={question.answers} totalVotes={totalVotes} />
        </Paper>
      </CardActions>
    </Card>
  );
};

QuestionResult.propTypes = {
  question: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
  }),
};

export default QuestionResult;
