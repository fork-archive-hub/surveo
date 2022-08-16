import PropTypes from 'prop-types';

import SubquestionForm from './SubquestionForm';

const SubquestionFormManager = ({ subquestions, selectedAnswerIndex }) => {
  const requiredSubquestions = subquestions.filter((subquestion) =>
    subquestion.requirements.includes(selectedAnswerIndex)
  );

  if (requiredSubquestions.length > 0) {
    return (
      <>
        {requiredSubquestions.map((subquestion) => (
          <SubquestionForm key={subquestion._id} subquestion={subquestion} />
        ))}
      </>
    );
  }

  return null;
};

SubquestionFormManager.propTypes = {
  subquestions: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  selectedAnswerIndex: PropTypes.number.isRequired,
};

export default SubquestionFormManager;
