import PropTypes from 'prop-types';
import { useState } from 'react';

import { Stack, Card, CardHeader, CardActions, Paper } from '@mui/material';

import { useFormContext } from 'react-hook-form';

import AnswerGroup from './AnswerGroup';
import SubquestionStack from './SubquestionStack';

const Question = ({ question }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const { setValue } = useFormContext();

  const handleSelectAnswer = (answerId, answerIndex) => {
    setValue(question._id, answerId);
    setSelectedAnswerIndex(answerIndex);
  };

  return (
    <Stack>
      <Card>
        <CardHeader title={question.text} />
        <CardActions>
          <Paper elevation={2} sx={{ width: 1, p: 2 }}>
            <AnswerGroup answers={question.answers} onSelectAnswer={handleSelectAnswer} />
          </Paper>
        </CardActions>
      </Card>
      <SubquestionStack subquestions={question.subquestions} selectedAnswerIndex={selectedAnswerIndex} />
    </Stack>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    subquestions: PropTypes.array.isRequired,
  }),
};

export default Question;
