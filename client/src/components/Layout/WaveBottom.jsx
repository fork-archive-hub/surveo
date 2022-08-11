import { Box, useTheme } from '@mui/material';

const WaveBottom = () => {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'absolute', bottom: 0, width: 1, zIndex: -1, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 320" height="320" width="100%" preserveAspectRatio="xMidYMid slice">
        <path
          fill={theme.palette.primary.main}
          fillOpacity="0.5"
          d="M0,160L48,154.7C96,149,192,139,288,138.7C384,139,480,149,576,176C672,203,768,245,864,250.7C960,256,1056,224,1152,224C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </Box>
  );
};

export default WaveBottom;
