import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Grid, Stack, Typography, Link as MUILink } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

import { LoginForm } from '../features/authentication';

import { feathers } from '../redux';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitCredentials = async ({ username, password }) => {
    try {
      await dispatch(feathers.authentication.login({ username: username, password: password }));

      toast.success('Login successful', { toastId: 'success-login' });
      navigate('/');
    } catch (error) {
      toast.error(error.message, { toastId: 'error-login' });
    }
  };

  useDocumentTitle('Login');

  return (
    <Grid container sx={{ height: '100vh', alignItems: { md: 'center' }, justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3.5}>
        <LoginForm onSubmitCredentials={handleSubmitCredentials} />
        <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', my: 1 }}>
          <Typography variant="body2">Dont have an account?</Typography>
          <MUILink to="/auth/register" variant="body2" component={Link}>
            Register
          </MUILink>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
