import PropTypes from 'prop-types';

import { Stack, Paper, Typography } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import CreateAnswerFormManager from './CreateAnswerFormManager';
import CreateSubquestionFormManager from './CreateSubquestionFormManager';

import { TextField, Button } from '../../../components/Form';

const CreateQuestionForm = ({ name, index, isRemoveButtonDisabled, onRemoveQuestion }) => {
  const { control } = useFormContext();

  const handleRemoveQuestion = () => {
    if (onRemoveQuestion) {
      onRemoveQuestion(index);
    }
  };

  return (
    <Stack direction="column" spacing={2}>
      <Paper elevation={1} sx={{ p: 2 }}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h6" display="block" align="center">
            Question #{index + 1}
          </Typography>

          <Controller
            control={control}
            name={`${name}.text`}
            render={(controller) => <TextField label="Question" controller={controller} />}
          />

          <Paper elevation={2} sx={{ p: 2 }}>
            <CreateAnswerFormManager name={`${name}.answers`} />
          </Paper>

          <Button disabled={isRemoveButtonDisabled} onClick={handleRemoveQuestion}>
            Remove question #{index + 1}
          </Button>
        </Stack>
      </Paper>

      <CreateSubquestionFormManager name={`${name}.subquestions`} parentAnswerField={`${name}.answers`} />
    </Stack>
  );
};

CreateQuestionForm.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isRemoveButtonDisabled: PropTypes.bool.isRequired,
  onRemoveQuestion: PropTypes.func.isRequired,
};

export default CreateQuestionForm;
