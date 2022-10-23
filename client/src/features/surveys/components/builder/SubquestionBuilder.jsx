import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Paper, Stack } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import AnswerTextFieldStack from './AnswerTextFieldStack';
import SubquestionRequirements from './SubquestionRequirements';

import { TextField, Button } from '../../../../components/form';

const SubquestionBuilder = ({ path, index, questionAnswersPath, onRemoveSubquestion }) => {
  const { control } = useFormContext();

  const handleRemoveSubquestion = () => {
    if (onRemoveSubquestion) {
      onRemoveSubquestion(index);
    }
  };

  return (
    <Card>
      <CardHeader title={`Subquestion ${index + 1}`} />
      <CardActions>
        <Stack sx={{ width: 1 }}>
          <Controller
            control={control}
            name={`${path}.text`}
            render={({ field, fieldState }) => (
              <TextField
                label="Question"
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Paper elevation={2} sx={{ p: 2 }}>
            <AnswerTextFieldStack path={`${path}.answers`} />
          </Paper>
          <SubquestionRequirements path={`${path}.requirements`} questionAnswersPath={questionAnswersPath} />
          <Button onClick={handleRemoveSubquestion}>Remove subquestion #{index + 1}</Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

SubquestionBuilder.propTypes = {
  path: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  questionAnswersPath: PropTypes.string.isRequired,
  onRemoveSubquestion: PropTypes.func.isRequired,
};

export default SubquestionBuilder;
