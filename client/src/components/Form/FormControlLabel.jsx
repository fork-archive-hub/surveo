import { forwardRef } from 'react';

import { FormControlLabel as MUIFormControlLabel } from '@mui/material';

const FormControlLabel = forwardRef((props, ref) => {
  return <MUIFormControlLabel size="small" ref={ref} sx={{ mx: 0 }} {...props} />;
});

FormControlLabel.displayName = 'FormControlLabel';

export default FormControlLabel;
