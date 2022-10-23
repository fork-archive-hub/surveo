import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { Stack } from '@mui/material';

import QuestionResult from './QuestionResult';

const QuestionResultStack = ({ questions }) => {
  return (
    <Stack>
      {questions.map((question) => (
        <Fragment key={question._id}>
          <QuestionResult question={question} />
          {question.subquestions.map((subquestion) => (
            <QuestionResult key={subquestion._id} question={subquestion} />
          ))}
        </Fragment>
      ))}
    </Stack>
  );
};

QuestionResultStack.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      subquestions: PropTypes.arrayOf(
        PropTypes.shape({
          _id: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    })
  ).isRequired,
};

export default QuestionResultStack;
