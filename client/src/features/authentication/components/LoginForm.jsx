import PropTypes from 'prop-types';

import { Paper, Typography, Stack } from '@mui/material';

import { useForm } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';
import { loginFormSchema } from '../schemas';

import { ControlledTextField, SubmitButton } from '../../../components/Form';

const LoginForm = ({ onSubmitCredentials }) => {
  const { control, handleSubmit } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: joiResolver(loginFormSchema),
  });

  const onSubmit = (data) => {
    if (onSubmitCredentials) {
      onSubmitCredentials(data);
    }
  };

  return (
    <Paper sx={{ width: 340, p: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2}>
          <Typography align="center" variant="h4" display="block">
            Sign in
          </Typography>
          <ControlledTextField control={control} name="username" label="Username" />
          <ControlledTextField control={control} name="password" label="Password" type="password" />
          <SubmitButton>Login</SubmitButton>
        </Stack>
      </form>
    </Paper>
  );
};

LoginForm.propTypes = {
  onSubmitCredentials: PropTypes.func.isRequired,
};

export default LoginForm;
