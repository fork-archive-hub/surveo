import { Box, useTheme } from '@mui/material';

const WaveTop = () => {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'absolute', top: 0, width: 1, zIndex: -1, lineHeight: 0 }}>
      <svg viewBox="0 0 1440 320" height="320" width="100%" preserveAspectRatio="xMidYMax slice">
        <path
          fill={theme.palette.primary.main}
          fillOpacity="0.5"
          d="M0,256L48,229.3C96,203,192,149,288,117.3C384,85,480,75,576,101.3C672,128,768,192,864,229.3C960,267,1056,277,1152,250.7C1248,224,1344,160,1392,128L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </Box>
  );
};

export default WaveTop;
