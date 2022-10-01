import PropTypes from 'prop-types';

import { Stack, Card, CardHeader, CardActions, Paper } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import NewAnswerManager from './NewAnswerManager';
import NewSubquestionManager from './NewSubquestionManager';

import { TextField, Button } from '../../../../components/form';

const NewQuestion = ({ name, index, isRemoveButtonDisabled, onRemoveQuestion }) => {
  const { control } = useFormContext();

  const handleRemoveQuestion = () => {
    if (onRemoveQuestion) {
      onRemoveQuestion(index);
    }
  };

  return (
    <Stack direction="column" spacing={2}>
      <Card>
        <CardHeader
          title={`Question ${index + 1}`}
          titleTypographyProps={{ variant: 'h6', display: 'block', align: 'center' }}
        />
        <CardActions sx={{ p: 2, pt: 0 }}>
          <Stack direction="column" spacing={2} sx={{ width: 1 }}>
            <Controller
              control={control}
              name={`${name}.text`}
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
              <NewAnswerManager name={`${name}.answers`} />
            </Paper>
            <Button disabled={isRemoveButtonDisabled} onClick={handleRemoveQuestion}>
              Remove question #{index + 1}
            </Button>
          </Stack>
        </CardActions>
      </Card>
      <NewSubquestionManager name={`${name}.subquestions`} parentAnswerField={`${name}.answers`} />
    </Stack>
  );
};

NewQuestion.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isRemoveButtonDisabled: PropTypes.bool.isRequired,
  onRemoveQuestion: PropTypes.func.isRequired,
};

export default NewQuestion;
