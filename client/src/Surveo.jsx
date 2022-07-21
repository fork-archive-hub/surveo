import { ThemeProvider, CssBaseline } from '@mui/material';

import { theme } from './theme';

const Surveo = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
};

export default Surveo;
