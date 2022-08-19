import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Stack } from '@mui/material';

import { useForm, Controller } from 'react-hook-form';

import { joiResolver } from '@hookform/resolvers/joi';
import { loginFormSchema } from '../schemas';

import { TextField, SubmitButton } from '../../../components/Form';

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
    <Card sx={{ width: 340 }}>
      <CardHeader title="Sign in" titleTypographyProps={{ variant: 'h4', display: 'block', align: 'center' }} />
      <CardActions sx={{ p: 2, pt: 0, '> form': { width: 1 } }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={2}>
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
            <SubmitButton>Login</SubmitButton>
          </Stack>
        </form>
      </CardActions>
    </Card>
  );
};

LoginForm.propTypes = {
  onSubmitCredentials: PropTypes.func.isRequired,
};

export default LoginForm;
