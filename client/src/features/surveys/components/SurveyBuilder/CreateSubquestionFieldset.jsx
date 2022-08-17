import PropTypes from 'prop-types';

import { Paper, Stack, Typography } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import AnswerTextFieldGroup from './AnswerTextFieldGroup';
import RequirementConfigurationFieldset from './RequirementConfigurationFieldset';

import { TextField, Button } from '../../../../components/Form';

const CreateSubquestionFieldset = ({ name, index, parentAnswerField, onRemoveSubquestion }) => {
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
          render={(controller) => <TextField label="Question" controller={controller} />}
        />
        <Paper elevation={2} sx={{ p: 2 }}>
          <AnswerTextFieldGroup name={`${name}.answers`} />
        </Paper>
        <Paper elevation={2} sx={{ p: 2 }}>
          <RequirementConfigurationFieldset name={`${name}.requirements`} parentAnswerField={parentAnswerField} />
        </Paper>
        <Button onClick={handleRemoveSubquestion}>Remove subquestion #{index + 1}</Button>
      </Stack>
    </Paper>
  );
};

CreateSubquestionFieldset.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  parentAnswerField: PropTypes.string.isRequired,
  onRemoveSubquestion: PropTypes.func.isRequired,
};

export default CreateSubquestionFieldset;
