import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import Subquestion from './Subquestion';

const SubquestionList = ({ subquestions, selectedAnswerIndex }) => {
  const requiredSubquestions = subquestions.filter((subquestion) =>
    subquestion.requirements.includes(selectedAnswerIndex)
  );

  if (requiredSubquestions.length > 0) {
    return (
      <Stack direction="column" spacing={2}>
        {requiredSubquestions.map((subquestion) => (
          <Subquestion key={subquestion._id} subquestion={subquestion} />
        ))}
      </Stack>
    );
  }

  return null;
};

SubquestionList.propTypes = {
  subquestions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedAnswerIndex: PropTypes.number.isRequired,
};

export default SubquestionList;
