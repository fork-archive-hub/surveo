import PropTypes from 'prop-types';
import { useState } from 'react';

import { Card, CardHeader, CardActions, Stack, Tabs, Tab, Paper } from '@mui/material';
import { TableRows as AnswerStackIcon, PieChart as PieChartIcon, Hexagon as PolarChartIcon } from '@mui/icons-material';

import AnswerStack from './AnswerStack';
import PieChart from './PieChart';
import PolarChart from './PolarChart';

const QuestionResult = ({ question }) => {
  const [chartType, setChartType] = useState('stack');

  const totalVotes = question.answers.reduce((acc, answer) => acc + answer.votes, 0);

  const handleChangeChartType = (_, value) => {
    setChartType(value);
  };

  return (
    <Card>
      <CardHeader title={question.text} subheader={`${totalVotes} vote${totalVotes === 1 ? '' : 's'}`} />
      <CardActions>
        <Stack direction="column" spacing={2} sx={{ width: 1 }}>
          <Tabs centered variant="fullWidth" value={chartType} onChange={handleChangeChartType}>
            <Tab icon={<AnswerStackIcon />} value="stack" />
            <Tab icon={<PieChartIcon />} value="pie" />
            <Tab icon={<PolarChartIcon />} value="polar" />
          </Tabs>
          <Paper elevation={2} sx={{ width: 1, p: 2 }}>
            {chartType === 'stack' && <AnswerStack answers={question.answers} />}
            {chartType === 'pie' && <PieChart answers={question.answers} />}
            {chartType === 'polar' && <PolarChart answers={question.answers} />}
          </Paper>
        </Stack>
      </CardActions>
    </Card>
  );
};

QuestionResult.propTypes = {
  question: PropTypes.shape({
    text: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        votes: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }),
};

export default QuestionResult;
