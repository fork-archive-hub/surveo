import PropTypes from 'prop-types';
import { useState } from 'react';

import { Stack, Card, CardHeader, CardActions, Paper } from '@mui/material';

import { useFormContext } from 'react-hook-form';

import Answers from './Answers';
import SubquestionList from './SubquestionList';

const Question = ({ question }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const { setValue } = useFormContext();

  const handleSelectAnswer = (answerId, answerIndex) => {
    setValue(question._id, answerId);
    setSelectedAnswerIndex(answerIndex);
  };

  return (
    <Stack direction="column" spacing={2}>
      <Card>
        <CardHeader title={question.text} titleTypographyProps={{ variant: 'h6', display: 'block', align: 'center' }} />
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Paper elevation={2} sx={{ width: 1, p: 2 }}>
            <Answers answers={question.answers} onSelectAnswer={handleSelectAnswer} />
          </Paper>
        </CardActions>
      </Card>
      <SubquestionList subquestions={question.subquestions} selectedAnswerIndex={selectedAnswerIndex} />
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
