import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Box, Stack, Typography, Link as MUILink } from '@mui/material';

import { toast } from 'react-toastify';

import { LoginForm } from '../features/authentication';

import { feathers } from '../redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async ({ username, password }) => {
    const result = await dispatch(feathers.authentication.login({ username, password }));

    if (result.error) {
      return toast.error(result.error);
    }

    toast.success('Login successful');
    navigate('/');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: { sm: 'auto', md: '100vh' }, p: 2 }}
    >
      <LoginForm onSubmitCredentials={handleLogin} />
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
