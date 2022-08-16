import PropTypes from 'prop-types';

import { Paper, Stack, Typography } from '@mui/material';

import { useFormContext } from 'react-hook-form';

import CreateAnswerFormManager from './CreateAnswerFormManager';
import CreateRequirementsForm from './CreateRequirementsForm';

import { ControlledTextField, Button } from '../../../components/Form';

const CreateSubquestionForm = ({ name, index, parentAnswerField, onRemoveSubquestion }) => {
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

        <ControlledTextField control={control} name={`${name}.text`} label="Question" />

        <Paper elevation={2} sx={{ p: 2 }}>
          <CreateAnswerFormManager name={`${name}.answers`} />
        </Paper>

        <Paper elevation={2} sx={{ p: 2 }}>
          <CreateRequirementsForm name={`${name}.requirements`} parentAnswerField={parentAnswerField} />
        </Paper>

        <Button onClick={handleRemoveSubquestion}>Remove subquestion #{index + 1}</Button>
      </Stack>
    </Paper>
  );
};

CreateSubquestionForm.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  parentAnswerField: PropTypes.string.isRequired,
  onRemoveSubquestion: PropTypes.func.isRequired,
};

export default CreateSubquestionForm;
