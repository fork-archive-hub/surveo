import PropTypes from 'prop-types';

import { Provider } from 'react-redux';
import { store } from './redux';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';

import { BrowserRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>{children}</BrowserRouter>
        <ToastContainer theme="dark" position={toast.POSITION.TOP_CENTER} />
      </ThemeProvider>
    </Provider>
  );
};

Providers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Providers;
