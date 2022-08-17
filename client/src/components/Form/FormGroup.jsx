import { forwardRef } from 'react';

import { FormGroup as MUIFormGroup } from '@mui/material';

const FormGroup = forwardRef((props, ref) => {
  return <MUIFormGroup ref={ref} {...props} />;
});

FormGroup.displayName = 'FormGroup';

export default FormGroup;
