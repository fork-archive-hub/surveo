import PropTypes from 'prop-types';

import { Stack, Card, CardHeader, CardActions, Paper } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import AnswerTextFieldGroup from './AnswerTextFieldGroup';
import CreateSubquestionFieldsetGroup from './CreateSubquestionFieldsetGroup';

import { TextField, Button } from '../../../../components/form';

const CreateQuestionFieldset = ({ name, index, isRemoveButtonDisabled, onRemoveQuestion }) => {
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
              render={(controller) => <TextField label="Question" controller={controller} />}
            />
            <Paper elevation={2} sx={{ p: 2 }}>
              <AnswerTextFieldGroup name={`${name}.answers`} />
            </Paper>
            <Button disabled={isRemoveButtonDisabled} onClick={handleRemoveQuestion}>
              Remove question #{index + 1}
            </Button>
          </Stack>
        </CardActions>
      </Card>
      <CreateSubquestionFieldsetGroup name={`${name}.subquestions`} parentAnswerField={`${name}.answers`} />
    </Stack>
  );
};

CreateQuestionFieldset.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isRemoveButtonDisabled: PropTypes.bool.isRequired,
  onRemoveQuestion: PropTypes.func.isRequired,
};

export default CreateQuestionFieldset;