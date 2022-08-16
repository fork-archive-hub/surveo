import PropTypes from 'prop-types';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { Provider } from 'react-redux';
import { store } from './redux';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';

import { BrowserRouter } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Providers = ({ children }) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>{children}</BrowserRouter>
          <ToastContainer theme="dark" position={toast.POSITION.TOP_CENTER} />
        </ThemeProvider>
      </Provider>
    </GoogleReCaptchaProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Providers;
