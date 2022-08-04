import { Provider } from 'react-redux';
import { store } from './redux';

import { ThemeProvider, CssBaseline } from '@mui/material';

import { theme } from './theme';

const Surveo = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
      </ThemeProvider>
    </Provider>
  );
};

export default Surveo;
