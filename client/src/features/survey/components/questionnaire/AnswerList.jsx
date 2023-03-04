import PropTypes from 'prop-types';
import { useId } from 'react';

import Answer from './Answer';

import RadioGroup from '../../../../components/form/RadioGroup';

const AnswerList = ({ answers, onSelectAnswer }) => {
  const groupId = useId();

  const handleChange = (event) => {
    const answerIndex = answers.findIndex((answer) => answer._id === event.target.value);

    if (onSelectAnswer) {
      onSelectAnswer(event.target.value, answerIndex);
    }
  };

  return (
    <RadioGroup name={groupId} onChange={handleChange} sx={{ '> *:last-child': { m: 0 } }}>
      {answers.map((answer) => (
        <Answer key={answer._id} answer={answer} />
      ))}
    </RadioGroup>
  );
};

AnswerList.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectAnswer: PropTypes.func.isRequired,
};

export default AnswerList;
