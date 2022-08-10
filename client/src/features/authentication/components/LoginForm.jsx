import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Paper, Typography, TextField, Stack, Button } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';

import { validateUsername } from '../utils/validateUsername';
import { validatePassword } from '../utils/validatePassword';

import { feathers } from '../../../redux';

const LoginForm = (onSuccessfulLogin) => {
  const { control, formState, handleSubmit, setError } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
  });
  const dispatch = useDispatch();

  const onSubmit = async ({ username, password }) => {
    const result = await dispatch(feathers.authentication.login({ username, password }));

    if (result.error) {
      ['username', 'password'].forEach((field) => {
        setError(field, { type: 'validate', message: result.error });
      });
    } else {
      if (onSuccessfulLogin) {
        onSuccessfulLogin();
      }
    }
  };

  const handleFieldValidation = (validator) => {
    return (value) => {
      const { result, message } = validator(value);

      return result || message;
    };
  };

  return (
    <Paper sx={{ width: 340, p: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction="column" spacing={2}>
          <Typography align="center" variant="h4" display="block">
            Sign in
          </Typography>
          <Controller
            name="username"
            control={control}
            rules={{ required: true, validate: handleFieldValidation(validateUsername) }}
            render={({ field }) => (
              <TextField
                variant="filled"
                label="Username"
                error={!!formState.errors.username}
                helperText={formState.errors.username && formState.errors.username.message}
                {...field}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{ required: true, validate: handleFieldValidation(validatePassword) }}
            render={({ field }) => (
              <TextField
                variant="filled"
                type="password"
                label="Password"
                error={!!formState.errors.password}
                helperText={formState.errors.password && formState.errors.password.message}
                {...field}
              />
            )}
          />
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

LoginForm.propTypes = {
  onSuccessfulLogin: PropTypes.func.isRequired,
};

export default LoginForm;
