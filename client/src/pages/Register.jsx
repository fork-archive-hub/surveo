import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Box, Stack, Typography, Link as MUILink } from '@mui/material';

import { toast } from 'react-toastify';

import { RegisterForm } from '../features/authentication';

import { feathers } from '../redux';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = async ({ username, password }) => {
    const result = await dispatch(feathers.authentication.register({ username, password }));

    if (result.error) {
      return toast.error(result.error);
    }

    toast.success('Account created successfully');
    navigate('/');
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: { sm: 'auto', md: '100vh' } }}
    >
      <RegisterForm onSubmitCredentials={onRegister} />
      <Stack direction="row" gap={1} sx={{ my: 1 }}>
        <Typography variant="body2">Already have an account?</Typography>
        <MUILink to="/login" variant="body2" component={Link}>
          Login
        </MUILink>
      </Stack>
    </Box>
  );
};

export default Register;
