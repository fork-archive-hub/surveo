export const base = {
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
};
