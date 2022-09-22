import { forwardRef } from 'react';

import { Radio as MUIRadio } from '@mui/material';

const Radio = forwardRef((props, ref) => {
  return <MUIRadio size="small" ref={ref} {...props} />;
});

Radio.displayName = 'Radio';

export default Radio;
