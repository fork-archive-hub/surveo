import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Paper, Typography, TextField, Stack, Button } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-toastify';

import { joiResolver } from '@hookform/resolvers/joi';
import { login } from '../schemas';

import { feathers } from '../../../redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { control, handleSubmit, setError } = useForm({
    mode: 'all',
    reValidateMode: 'onChange',
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: joiResolver(login),
  });

  const onSubmit = async ({ username, password }) => {
    const result = await dispatch(feathers.authentication.login({ username, password }));

    if (result.error) {
      ['username', 'password'].forEach((field) => {
        setError(field, { type: 'validate', message: result.error });
      });
    } else {
      toast.success('Login successful');
      navigate('/');
    }
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
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default LoginForm;
