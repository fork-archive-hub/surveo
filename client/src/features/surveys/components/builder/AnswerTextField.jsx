import PropTypes from 'prop-types';

import { InputAdornment, IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

import { useFormContext, Controller } from 'react-hook-form';

import { TextField } from '../../../../components/form';

const AnswerTextField = ({ name, index, isRemoveButtonDisabled, onRemoveAnswer }) => {
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
          label="Answer"
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
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

AnswerTextField.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isRemoveButtonDisabled: PropTypes.bool.isRequired,
  onRemoveAnswer: PropTypes.func.isRequired,
};

export default AnswerTextField;
