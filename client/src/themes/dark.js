import { createTheme, responsiveFontSizes } from '@mui/material';

import { deepmerge } from '@mui/utils';
import { base } from './base';

export const dark = responsiveFontSizes(
  createTheme(
    deepmerge(base, {
      palette: {
        mode: 'dark',
        primary: {
          main: '#10ac84',
        },
        secondary: {
          main: '#0A7057',
        },
        background: {
          main: '#074A3A',
        },
      },
    })
  )
);
