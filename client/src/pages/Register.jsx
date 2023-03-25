import { Link, useNavigate } from 'react-router-dom';

import { Grid, Stack, Typography, Link as MUILink } from '@mui/material';

import { toast } from 'react-toastify';

import { useDocumentTitle } from '../hooks/useDocumentTitle';

import BrandHeader from '../components/elements/BrandHeader';
import { RegisterForm } from '../features/authentication';

import { feathers } from '../apis/feathers';

const Register = () => {
  const navigate = useNavigate();

  const handleSubmitCredentials = async ({ username, password }) => {
    try {
      await feathers.client.service('users').create({ username: username, password: password });

      toast.success('Account created successfully', { toastId: 'success-register' });
      navigate('/auth/login');
    } catch (error) {
      toast.error(error.message, { toastId: 'error-register' });
    }
  };

  useDocumentTitle('Register');

  return (
    <Grid container sx={{ height: '100vh', alignItems: { md: 'center' }, justifyContent: 'center', py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3.5}>
        <BrandHeader />
        <RegisterForm onSubmitCredentials={handleSubmitCredentials} />
        <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', my: 1 }}>
          <Typography variant="body2">Already have an account?</Typography>
          <MUILink to="/auth/login" variant="body2" component={Link}>
            Login
          </MUILink>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Register;
