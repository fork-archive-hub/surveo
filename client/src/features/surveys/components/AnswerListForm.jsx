import PropTypes from 'prop-types';
import { useId } from 'react';

import { RadioGroup, FormControlLabel, Radio } from '../../../components/Form';

const AnswerListForm = ({ answers, onSelectAnswer }) => {
  const groupId = useId();

  const handleChange = (event) => {
    const answerIndex = answers.findIndex((answer) => answer._id === event.target.value);

    if (onSelectAnswer) {
      onSelectAnswer(event.target.value, answerIndex);
    }
  };

  return (
    <RadioGroup name={groupId} onChange={handleChange}>
      {answers.map((answer) => (
        <FormControlLabel
          key={answer._id}
          label={answer.text}
          control={<Radio size="small" value={answer._id} required />}
        />
      ))}
    </RadioGroup>
  );
};

AnswerListForm.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      index: PropTypes.number.isRequired,
    })
  ).isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
};

export default AnswerListForm;
