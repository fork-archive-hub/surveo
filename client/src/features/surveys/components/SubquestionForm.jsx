import PropTypes from 'prop-types';

import { Paper, Typography } from '@mui/material';

import { useFormContext } from 'react-hook-form';

import AnswerListForm from './AnswerListForm';

const SubquestionForm = ({ subquestion }) => {
  const { setValue } = useFormContext();

  const handleSelectAnswer = (answerId) => {
    setValue(subquestion._id, answerId);
  };

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Typography variant="h6" display="block" align="center" gutterBottom>
        {subquestion.text}
      </Typography>

      <Paper elevation={2} sx={{ p: 2 }}>
        <AnswerListForm answers={subquestion.answers} onSelectAnswer={handleSelectAnswer} />
      </Paper>
    </Paper>
  );
};

SubquestionForm.propTypes = {
  subquestion: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
  }),
};

export default SubquestionForm;
