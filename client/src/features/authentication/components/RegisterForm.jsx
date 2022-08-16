import PropTypes from 'prop-types';

import { Paper, Typography, TextField, Stack, Button } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';
import { registerFormSchema } from '../schemas';

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
            name="username"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                variant="filled"
                label="Username"
                error={!!fieldState.error}
                helperText={fieldState.error && fieldState.error.message}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                variant="filled"
                type="password"
                label="Password"
                error={!!fieldState.error}
                helperText={fieldState.error && fieldState.error.message}
                {...field}
              />
            )}
          />
          <Controller
            name="repeatPassword"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                variant="filled"
                type="password"
                label="Repeat password"
                error={!!fieldState.error}
                helperText={fieldState.error && fieldState.error.message}
                {...field}
              />
            )}
          />
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

RegisterForm.propTypes = {
  onSubmitCredentials: PropTypes.func.isRequired,
};

export default RegisterForm;
