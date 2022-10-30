import { createTheme, responsiveFontSizes } from '@mui/material';

import { palette } from './palette';
import { components } from './components';

export const theme = responsiveFontSizes(
  createTheme({
    palette: palette,
    components: components,
  })
);
