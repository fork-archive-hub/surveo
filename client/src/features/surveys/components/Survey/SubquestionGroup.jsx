import PropTypes from 'prop-types';

import Subquestion from './Subquestion';

const SubquestionGroup = ({ subquestions, selectedAnswerIndex }) => {
  const requiredSubquestions = subquestions.filter((subquestion) =>
    subquestion.requirements.includes(selectedAnswerIndex)
  );

  if (requiredSubquestions.length > 0) {
    return (
      <>
        {requiredSubquestions.map((subquestion) => (
          <Subquestion key={subquestion._id} subquestion={subquestion} />
        ))}
      </>
    );
  }

  return null;
};

SubquestionGroup.propTypes = {
  subquestions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedAnswerIndex: PropTypes.number.isRequired,
};

export default SubquestionGroup;
