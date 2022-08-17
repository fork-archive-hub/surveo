import PropTypes from 'prop-types';

import { Paper, Typography, Stack } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';
import { registerFormSchema } from '../schemas';

import { TextField, SubmitButton } from '../../../components/Form';

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
          <Controller
            control={control}
            name="username"
            render={(controller) => <TextField label="Username" controller={controller} />}
          />
          <Controller
            control={control}
            name="password"
            render={(controller) => <TextField label="Password" type="password" controller={controller} />}
          />
          <Controller
            control={control}
            name="repeatPassword"
            render={(controller) => <TextField label="Repeat password" type="password" controller={controller} />}
          />
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
