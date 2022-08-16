import PropTypes from 'prop-types';

import { TextField } from '@mui/material';

import { useController } from 'react-hook-form';

const ControlledTextField = ({ control, name, ...rest }) => {
  const { field, fieldState } = useController({
    control: control,
    name: name,
  });

  return (
    <TextField
      size="small"
      variant="outlined"
      error={!!fieldState.error}
      helperText={fieldState.error && fieldState.error.message}
      {...field}
      {...rest}
    />
  );
};

ControlledTextField.propTypes = {
  control: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default ControlledTextField;
