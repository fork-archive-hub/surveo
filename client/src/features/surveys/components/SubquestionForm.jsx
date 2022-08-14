import PropTypes from 'prop-types';

import { Paper, Stack, Typography, TextField, Button } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import AnswerFormManager from './AnswerFormManager';
import RequirementsForm from './RequirementsForm';

const SubquestionForm = ({ name, index, parentAnswerField, onRemoveSubquestion }) => {
  const { control } = useFormContext();

  const handleRemoveSubquestion = () => {
    if (onRemoveSubquestion) {
      onRemoveSubquestion(index);
    }
  };

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h6" display="block" align="center">
          Subquestion #{index + 1}
        </Typography>

        <Controller
          control={control}
          name={`${name}.text`}
          render={({ field, fieldState }) => (
            <TextField
              size="small"
              variant="outlined"
              label="Question"
              error={!!fieldState.error}
              helperText={fieldState.error && fieldState.error.message}
              {...field}
            />
          )}
        />

        <Paper elevation={2} sx={{ p: 2 }}>
          <AnswerFormManager name={`${name}.answers`} />
        </Paper>

        <Paper elevation={2} sx={{ p: 2 }}>
          <RequirementsForm name={`${name}.requirements`} parentAnswerField={parentAnswerField} />
        </Paper>

        <Button onClick={handleRemoveSubquestion}>Remove subquestion #{index + 1}</Button>
      </Stack>
    </Paper>
  );
};

SubquestionForm.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  parentAnswerField: PropTypes.string.isRequired,
  onRemoveSubquestion: PropTypes.func.isRequired,
};

export default SubquestionForm;
