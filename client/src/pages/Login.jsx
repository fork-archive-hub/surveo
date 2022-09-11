import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Box, Stack, Typography, Link as MUILink } from '@mui/material';

import { toast } from 'react-toastify';

import { LoginForm } from '../features/authentication';

import { feathers } from '../redux';

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const onSubmitCredentials = async ({ username, password }) => {
    const result = await dispatch(feathers.authentication.login({ username, password }));

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Login successful');
      navigate('/');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent={{ xs: 'start', md: 'center' }}
      sx={{ height: '100vh', py: 2 }}
    >
      <LoginForm onSubmitCredentials={onSubmitCredentials} />
      <Stack direction="row" gap={1} sx={{ my: 1 }}>
        <Typography variant="body2">Dont have an account?</Typography>
        <MUILink to="/register" variant="body2" component={Link}>
          Register
        </MUILink>
      </Stack>
    </Box>
  );
};

export default Login;
