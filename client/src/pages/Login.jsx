import { Link } from 'react-router-dom';

import { Box, Stack, Typography, Link as MUILink } from '@mui/material';

import { LoginForm } from '../features/authentication';

const Login = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: { sm: 'auto', md: 1 }, p: 2 }}
    >
      <LoginForm />
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
