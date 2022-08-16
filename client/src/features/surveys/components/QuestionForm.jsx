import PropTypes from 'prop-types';
import { useState } from 'react';

import { Stack, Paper, Typography } from '@mui/material';

import { useFormContext } from 'react-hook-form';

import AnswerListForm from './AnswerListForm';
import SubquestionFormManager from './SubquestionFormManager';

const QuestionForm = ({ question }) => {
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
          <AnswerListForm answers={question.answers} onSelectAnswer={handleSelectAnswer} />
        </Paper>
      </Paper>

      <SubquestionFormManager subquestions={question.subquestions} selectedAnswerIndex={selectedAnswerIndex} />
    </Stack>
  );
};

QuestionForm.propTypes = {
  question: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
    subquestions: PropTypes.array.isRequired,
  }),
};

export default QuestionForm;
