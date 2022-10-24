import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Box, Stack } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';
import { RegisterFormSchema } from '../schemas/RegisterFormSchema';

import { TextField, SubmitButton } from '../../../components/form';

const RegisterForm = ({ onSubmitCredentials }) => {
  const { control, handleSubmit } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
      repeatPassword: '',
    },
    resolver: joiResolver(RegisterFormSchema),
  });

  const onSubmit = (data) => {
    if (onSubmitCredentials) {
      onSubmitCredentials(data);
    }
  };

  return (
    <Card>
      <CardHeader title="Sign up" />
      <CardActions>
        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: 1 }}>
          <Stack>
            <Controller
              control={control}
              name="username"
              render={({ field, fieldState }) => (
                <TextField
                  label="Username"
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={({ field, fieldState }) => (
                <TextField
                  label="Password"
                  type="password"
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <Controller
              control={control}
              name="repeatPassword"
              render={({ field, fieldState }) => (
                <TextField
                  label="Repeat password"
                  type="password"
                  error={Boolean(fieldState.error)}
                  helperText={fieldState.error?.message}
                  {...field}
                />
              )}
            />
            <SubmitButton>Register</SubmitButton>
          </Stack>
        </Box>
      </CardActions>
    </Card>
  );
};

RegisterForm.propTypes = {
  onSubmitCredentials: PropTypes.func.isRequired,
};

export default RegisterForm;
