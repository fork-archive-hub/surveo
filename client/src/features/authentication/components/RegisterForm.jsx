import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Box, Stack } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';
import { RegisterFormSchema } from '../schemas/RegisterFormSchema';

import TextField from '../../../components/form/TextField';
import SubmitButton from '../../../components/form/SubmitButton';

const RegisterForm = ({ onSubmitCredentials }) => {
  const { formState, control, handleSubmit } = useForm({
    mode: 'all',
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
              render={(controller) => (
                <TextField
                  label="Username"
                  error={Boolean(controller.fieldState.error)}
                  helperText={controller.fieldState.error?.message}
                  {...controller.field}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              render={(controller) => (
                <TextField
                  label="Password"
                  type="password"
                  error={Boolean(controller.fieldState.error)}
                  helperText={controller.fieldState.error?.message}
                  {...controller.field}
                />
              )}
            />
            <Controller
              control={control}
              name="repeatPassword"
              render={(controller) => (
                <TextField
                  label="Repeat password"
                  type="password"
                  error={Boolean(controller.fieldState.error)}
                  helperText={controller.fieldState.error?.message}
                  {...controller.field}
                />
              )}
            />
            <SubmitButton disabled={!formState.isValid}>Register</SubmitButton>
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
