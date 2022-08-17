import PropTypes from 'prop-types';
import { useState } from 'react';

import { Stack, Paper, Typography } from '@mui/material';

import { useFormContext } from 'react-hook-form';

import AnswerRadioGroup from './AnswerFieldset';
import SubquestionGroup from './SubquestionGroup';

const Question = ({ question }) => {
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(-1);
  const { setValue } = useFormContext();

  const handleSelectAnswer = (answerId, answerIndex) => {
    setValue(question._id, answerId);
    setSelectedAnswerIndex(answerIndex);
  };

  return (
    <Stack direction="column" spacing={2}>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Typography variant="h6" display="block" align="center" gutterBottom>
          {question.text}
        </Typography>
        <Paper elevation={2} sx={{ p: 2 }}>
          <AnswerRadioGroup answers={question.answers} onSelectAnswer={handleSelectAnswer} />
        </Paper>
      </Paper>
      <SubquestionGroup subquestions={question.subquestions} selectedAnswerIndex={selectedAnswerIndex} />
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
