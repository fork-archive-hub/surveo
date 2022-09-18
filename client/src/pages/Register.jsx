import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { Box, Stack, Typography, Link as MUILink } from '@mui/material';

import { toast } from 'react-toastify';

import { RegisterForm } from '../features/authentication';

import { feathers } from '../redux';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmitCredentials = async ({ username, password }) => {
    const result = await dispatch(feathers.authentication.register({ username: username, password: password }));

    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success('Account created successfully');
      navigate('/login');
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
      <RegisterForm onSubmitCredentials={handleSubmitCredentials} />
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
