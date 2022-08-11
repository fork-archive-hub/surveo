import { Link } from 'react-router-dom';

import { Box, Stack, Typography, Link as MUILink } from '@mui/material';

import { RegisterForm } from '../features/authentication';

const Register = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ height: { sm: 'auto', md: 1 }, p: 2 }}
    >
      <RegisterForm />
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
