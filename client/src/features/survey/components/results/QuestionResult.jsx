import PropTypes from 'prop-types';
import { useState } from 'react';

import { Card, CardHeader, CardActions, Stack, Paper } from '@mui/material';

import { sumQuestionVotes } from '../../utils/sumQuestionVotes';

import AnswerResultStack from './AnswerResultStack';
import PolarResultChart from './PolarResultChart';

import { Button } from '../../../../components';

const QuestionResult = ({ question }) => {
  const [showPolarChart, setShowPolarChart] = useState(false);

  const totalVotes = sumQuestionVotes(question);

  const handleToggleShowPolarChart = () => {
    setShowPolarChart(!showPolarChart);
  };

  return (
    <Card>
      <CardHeader title={question.text} subheader={`${totalVotes} vote${totalVotes === 1 ? '' : 's'}`} />
      <CardActions>
        <Stack direction="column" spacing={1} sx={{ width: 1 }}>
          <Stack direction="row-reverse" spacing={2} sx={{ width: 1 }}>
            <Button onClick={handleToggleShowPolarChart} size="small">
              {showPolarChart ? 'Hide polar chart' : 'Show polar chart'}
            </Button>
          </Stack>
          <Paper elevation={2} sx={{ width: 1, p: 2 }}>
            {!showPolarChart && <AnswerResultStack answers={question.answers} totalVotes={totalVotes} />}
            {showPolarChart && <PolarResultChart answers={question.answers} />}
          </Paper>
        </Stack>
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
