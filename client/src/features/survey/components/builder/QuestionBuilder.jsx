import PropTypes from 'prop-types';

import { Stack, Card, CardHeader, CardActions, Paper } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import AnswerTextFieldStack from './AnswerTextFieldStack';
import SubquestionBuilderStack from './SubquestionBuilderStack';

import { TextField, Button } from '../../../../components/form';

const QuestionBuilder = ({ path, index, isRemoveButtonDisabled, onRemoveQuestion }) => {
  const { control } = useFormContext();

  const handleRemoveQuestion = () => {
    if (onRemoveQuestion) {
      onRemoveQuestion(index);
    }
  };

  return (
    <Stack>
      <Card>
        <CardHeader title={`Question ${index + 1}`} />
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
            <Button disabled={isRemoveButtonDisabled} onClick={handleRemoveQuestion}>
              Remove question #{index + 1}
            </Button>
          </Stack>
        </CardActions>
      </Card>
      <SubquestionBuilderStack path={`${path}.subquestions`} questionAnswersPath={`${path}.answers`} />
    </Stack>
  );
};

QuestionBuilder.propTypes = {
  path: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isRemoveButtonDisabled: PropTypes.bool.isRequired,
  onRemoveQuestion: PropTypes.func.isRequired,
};

export default QuestionBuilder;
