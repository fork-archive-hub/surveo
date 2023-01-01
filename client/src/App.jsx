import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { Provider } from 'react-redux';
import { store } from './redux';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './theme';

import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
          <ToastContainer theme="dark" position={toast.POSITION.TOP_CENTER} />
        </ThemeProvider>
      </Provider>
    </GoogleReCaptchaProvider>
  );
};

export default App;
