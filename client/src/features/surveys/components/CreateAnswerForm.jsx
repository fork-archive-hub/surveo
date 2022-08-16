import PropTypes from 'prop-types';

import { InputAdornment, IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

import { useFormContext } from 'react-hook-form';

import { ControlledTextField } from '../../../components/Form';

const CreateAnswerForm = ({ name, index, isRemoveButtonDisabled, onRemoveAnswer }) => {
  const { control } = useFormContext();

  const handleRemoveAnswer = () => {
    if (onRemoveAnswer) {
      onRemoveAnswer(index);
    }
  };

  return (
    <ControlledTextField
      control={control}
      name={`${name}.text`}
      label="Answer"
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
  );
};

CreateAnswerForm.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  isRemoveButtonDisabled: PropTypes.bool.isRequired,
  onRemoveAnswer: PropTypes.func.isRequired,
};

export default CreateAnswerForm;
