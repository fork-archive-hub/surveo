import PropTypes from 'prop-types';

import { InputAdornment, IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

import { useFormContext, Controller } from 'react-hook-form';

import { TextField } from '../../../components/Form';

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
      render={(controller) => (
        <TextField
          label="Answer"
          controller={controller}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton disabled={isRemoveButtonDisabled} onClick={handleRemoveAnswer}>
                  <DeleteOutline />
                </IconButton>
              </InputAdornment>
            ),
          }}
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
