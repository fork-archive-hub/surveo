import { forwardRef } from 'react';

import { Button as MUIButton } from '@mui/material';

const SubmitButton = forwardRef((props, ref) => {
  return <MUIButton type="submit" variant="contained" ref={ref} {...props} />;
});

SubmitButton.displayName = 'SubmitButton';

export default SubmitButton;
