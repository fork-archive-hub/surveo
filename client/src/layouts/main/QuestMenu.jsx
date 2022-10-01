import { Link } from 'react-router-dom';
import { Stack, Tooltip, Link as MUILink, Typography } from '@mui/material';

const QuestMenu = () => {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
      <Tooltip title="Login to your account">
        <MUILink to="/auth/login" variant="body2" size="small" component={Link}>
          Sign in
        </MUILink>
      </Tooltip>
      <Typography variant="body2" sx={{ color: 'textSecondary', textAlign: 'center', mx: 0.2 }}>
        or
      </Typography>
      <Tooltip title="Create a new account">
        <MUILink to="/auth/register" variant="body2" size="small" component={Link}>
          Sign up
        </MUILink>
      </Tooltip>
    </Stack>
  );
};

export default QuestMenu;
