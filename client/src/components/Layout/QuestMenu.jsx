import { Link } from 'react-router-dom';
import { Stack, Tooltip, Button, Typography } from '@mui/material';

const QuestMenu = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Tooltip title="Login to your account">
        <Button to="/" variant="text" size="small" component={Link}>
          Sign in
        </Button>
      </Tooltip>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mx: 0.2 }}>
        or
      </Typography>
      <Tooltip title="Create a new account">
        <Button to="/" variant="text" size="small" component={Link}>
          Sign up
        </Button>
      </Tooltip>
    </Stack>
  );
};

export default QuestMenu;
