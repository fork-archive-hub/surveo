import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Paper } from '@mui/material';

import { useFormContext } from 'react-hook-form';

import AnswerList from './AnswerList';

const Subquestion = ({ subquestion }) => {
  const { setValue } = useFormContext();

  const handleSelectAnswer = (answerId) => {
    setValue(subquestion._id, answerId);
  };

  return (
    <Card>
      <CardHeader title={subquestion.text} />
      <CardActions>
        <Paper elevation={2} sx={{ width: 1, p: 2 }}>
          <AnswerList answers={subquestion.answers} onSelectAnswer={handleSelectAnswer} />
        </Paper>
      </CardActions>
    </Card>
  );
};

Subquestion.propTypes = {
  subquestion: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired,
  }),
};

export default Subquestion;
