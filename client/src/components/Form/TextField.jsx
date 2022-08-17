import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { TextField as MUITextField } from '@mui/material';

const TextField = forwardRef(({ controller, ...rest }, ref) => {
  const isControllerProvided = controller !== undefined;
  const isTextFieldInvalid = isControllerProvided && !!(controller.fieldState && controller.fieldState.error);

  return (
    <MUITextField
      size="small"
      variant="outlined"
      ref={ref}
      error={isTextFieldInvalid}
      helperText={isTextFieldInvalid && controller.fieldState.error.message}
      {...(isControllerProvided && controller.field)}
      {...rest}
    />
  );
});

TextField.displayName = 'TextField';

TextField.propTypes = {
  controller: PropTypes.shape({
    field: PropTypes.object,
    fieldState: PropTypes.shape({
      error: PropTypes.shape({
        message: PropTypes.string,
      }),
    }),
  }),
};

export default TextField;
