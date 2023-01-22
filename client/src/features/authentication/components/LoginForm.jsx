import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Box, Stack } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';
import { LoginFormSchema } from '../schemas/LoginFormSchema';

import TextField from '../../../components/form/TextField';
import SubmitButton from '../../../components/form/SubmitButton';

const LoginForm = ({ onSubmitCredentials }) => {
  const { formState, control, handleSubmit } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: joiResolver(LoginFormSchema),
  });

  const onSubmit = (data) => {
    if (onSubmitCredentials) {
      onSubmitCredentials(data);
    }
  };

  return (
    <Card>
      <CardHeader title="Sign in" />
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
            <SubmitButton disabled={!formState.isValid || !formState.isDirty}>Login</SubmitButton>
          </Stack>
        </Box>
      </CardActions>
    </Card>
  );
};

LoginForm.propTypes = {
  onSubmitCredentials: PropTypes.func.isRequired,
};

export default LoginForm;
