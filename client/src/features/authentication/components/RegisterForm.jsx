import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Paper, Typography, TextField, Stack, Button } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';

import { validateUsername } from '../utils/validateUsername';
import { validatePassword } from '../utils/validatePassword';

import { feathers } from '../../../redux';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { control, formState, handleSubmit, setError, getValues } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
      repeatPassword: '',
    },
  });

  const onSubmit = async ({ username, password }) => {
    const result = await dispatch(feathers.authentication.register({ username, password }));

    if (result.error) {
      ['username'].forEach((field) => {
        setError(field, { type: 'validate', message: result.error });
      });
    } else {
      navigate('/login');
    }
  };

  const handleFieldValidation = (validator) => {
    return (value) => {
      const { result, message } = validator(value);

      return result || message;
    };
  };

  const validateRepeatPassword = (value) => {
    const result = getValues('password') === value;

    return {
      result: result,
      message: result ? '' : 'Passwords do not match',
    };
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
          <Controller
            name="repeatPassword"
            control={control}
            rules={{ required: true, validate: handleFieldValidation(validateRepeatPassword) }}
            render={({ field }) => (
              <TextField
                variant="filled"
                type="password"
                label="Repeat password"
                error={!!formState.errors.repeatPassword}
                helperText={formState.errors.repeatPassword && formState.errors.repeatPassword.message}
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

export default RegisterForm;
