import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { Stack } from '@mui/material';

import QuestionResults from './QuestionResults';

const QuestionResultsList = ({ questions }) => {
  return (
    <Stack direction="column" spacing={2}>
      {questions.map((question) => (
        <Fragment key={question._id}>
          <QuestionResults question={question} />
          {question.subquestions.map((subquestion) => (
            <QuestionResults key={subquestion._id} question={subquestion} />
          ))}
        </Fragment>
      ))}
    </Stack>
  );
};

QuestionResultsList.propTypes = {
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

export default QuestionResultsList;
