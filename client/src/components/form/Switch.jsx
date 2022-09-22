import { forwardRef } from 'react';

import { Switch as MUISwitch } from '@mui/material';

const Switch = forwardRef((props, ref) => {
  return <MUISwitch size="small" variant="outlined" ref={ref} {...props} />;
});

Switch.displayName = 'Switch';

export default Switch;
