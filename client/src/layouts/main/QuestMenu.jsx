import { Link } from 'react-router-dom';
import { Stack, Tooltip, Link as MUILink, Typography } from '@mui/material';

const QuestMenu = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" gap={1}>
      <Tooltip title="Login to your account">
        <MUILink to="/auth/login" variant="body2" size="small" component={Link}>
          Sign in
        </MUILink>
      </Tooltip>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ mx: 0.2 }}>
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
