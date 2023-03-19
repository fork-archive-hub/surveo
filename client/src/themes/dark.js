import { createTheme, responsiveFontSizes } from '@mui/material';

export const dark = responsiveFontSizes(
  createTheme({
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
    components: {
      MuiStack: {
        defaultProps: {
          spacing: 2,
        },
      },

      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: { variant: 'h6', display: 'block', align: 'center' },
          subheaderTypographyProps: { variant: 'caption', display: 'block', align: 'center' },
        },
      },

      MuiCardActions: {
        styleOverrides: {
          root: (state) => ({
            padding: state.theme.spacing(2),
            paddingTop: 0,
          }),
        },
      },

      MuiFormGroup: {
        styleOverrides: {
          root: {
            width: '100%',
          },
        },
      },

      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            marginLeft: 0,
            marginRight: 0,
          },
        },
      },
    },
  })
);
