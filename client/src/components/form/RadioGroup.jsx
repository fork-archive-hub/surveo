import { forwardRef } from 'react';

import { RadioGroup as MUIRadioGroup } from '@mui/material';

const RadioGroup = forwardRef((props, ref) => {
  return <MUIRadioGroup ref={ref} {...props} />;
});

RadioGroup.displayName = 'RadioGroup';

export default RadioGroup;
