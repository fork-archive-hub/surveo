import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { Provider } from 'react-redux';
import { store } from './redux';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { dark } from './themes/dark';

import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_GOOGLE_RECAPTCHA_KEY}>
      <Provider store={store}>
        <ThemeProvider theme={dark}>
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
