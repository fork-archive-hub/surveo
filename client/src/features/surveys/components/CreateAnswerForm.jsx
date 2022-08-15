import PropTypes from 'prop-types';

import { TextField, InputAdornment, IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

import { useFormContext, Controller } from 'react-hook-form';

const CreateAnswerForm = ({ name, index, isRemoveButtonDisabled, onRemoveAnswer }) => {
  const { control } = useFormContext();

  const handleRemoveAnswer = () => {
    if (onRemoveAnswer) {
      onRemoveAnswer(index);
    }
  };

  return (
    <Controller
      control={control}
      name={`${name}.text`}
      render={({ field, fieldState }) => (
        <TextField
          size="small"
          variant="outlined"
          label={`Answer #${index + 1}`}
          error={!!fieldState.error}
          helperText={fieldState.error && fieldState.error.message}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton disabled={isRemoveButtonDisabled} onClick={handleRemoveAnswer}>
                  <DeleteOutline />
                </IconButton>
              </InputAdornment>
            ),
          }}
          {...field}
        />
      )}
    />
  );
};

CreateAnswerForm.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isRemoveButtonDisabled: PropTypes.bool.isRequired,
  onRemoveAnswer: PropTypes.func.isRequired,
};

export default CreateAnswerForm;
