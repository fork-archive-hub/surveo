import { forwardRef } from 'react';

import { Box, CircularProgress } from '@mui/material';

const Spinner = forwardRef((props, ref) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 1, height: 1 }} ref={ref}>
      <CircularProgress />
    </Box>
  );
});

Spinner.displayName = 'Spinner';

export default Spinner;
