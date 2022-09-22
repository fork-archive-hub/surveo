import { Box, CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 1, height: 1 }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
