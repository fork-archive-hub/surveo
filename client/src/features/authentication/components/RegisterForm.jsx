import PropTypes from 'prop-types';

import { Paper, Typography, Stack } from '@mui/material';

import { useForm } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';
import { registerFormSchema } from '../schemas';

import { ControlledTextField, SubmitButton } from '../../../components/Form';

const RegisterForm = ({ onSubmitCredentials }) => {
  const { control, handleSubmit } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
      repeatPassword: '',
    },
    resolver: joiResolver(registerFormSchema),
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
            Sign up
          </Typography>
          <ControlledTextField control={control} name="username" label="Username" />
          <ControlledTextField control={control} name="password" label="Password" type="password" />
          <ControlledTextField control={control} name="repeatPassword" label="Repeat password" type="password" />
          <SubmitButton>Register</SubmitButton>
        </Stack>
      </form>
    </Paper>
  );
};

RegisterForm.propTypes = {
  onSubmitCredentials: PropTypes.func.isRequired,
};

export default RegisterForm;
