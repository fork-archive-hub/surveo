import PropTypes from 'prop-types';

import { useFormContext, Controller } from 'react-hook-form';

import TextField from '../../../../components/form/TextField';

const AnswerTextField = ({ path }) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={`${path}.text`}
      render={({ field, fieldState }) => (
        <TextField
          label="Answer"
          error={Boolean(fieldState.error)}
          helperText={fieldState.error?.message}
          fullWidth
          {...field}
        />
      )}
    />
  );
};

AnswerTextField.propTypes = {
  path: PropTypes.string.isRequired,
};

export default AnswerTextField;
