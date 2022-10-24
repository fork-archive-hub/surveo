import { createTheme, responsiveFontSizes } from '@mui/material';

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#d81b60',
      },
      secondary: {
        main: '#7b1fa2',
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
