import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Paper } from '@mui/material';

import { useFormContext } from 'react-hook-form';

import AnswerFieldset from './AnswerFieldset';

const Subquestion = ({ subquestion }) => {
  const { setValue } = useFormContext();

  const handleSelectAnswer = (answerId) => {
    setValue(subquestion._id, answerId);
  };

  return (
    <Card>
      <CardHeader
        title={subquestion.text}
        titleTypographyProps={{ variant: 'h6', display: 'block', align: 'center' }}
      />
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Paper elevation={2} sx={{ width: 1, p: 2 }}>
          <AnswerFieldset answers={subquestion.answers} onSelectAnswer={handleSelectAnswer} />
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
