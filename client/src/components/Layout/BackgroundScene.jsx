import { Box, useTheme } from '@mui/material';

const BackgroundScene = () => {
  const theme = useTheme();

  return (
    <Box sx={{ position: 'absolute', top: 0, left: 0, width: 1, height: 1, zIndex: -1, lineHeight: 0 }}>
      <svg viewBox="0 0 960 540" width="100%" height="100%" preserveAspectRatio="none">
        <g transform="translate(960, 0)">
          <path
            fill={theme.palette.primary.main}
            fillOpacity="0.5"
            d="M0 229.5C-21.6 218.2 -43.1 207 -64.7 199.2C-86.4 191.5 -108.1 187.4 -129.3 178C-150.6 168.6 -171.4 153.9 -185.7 134.9C-200 115.9 -207.8 92.7 -214 69.5C-220.2 46.3 -224.9 23.2 -229.5 0L0 0Z"
          ></path>
          <path
            fill={theme.palette.primary.main}
            fillOpacity="0.4"
            d="M0 459C-43.1 436.5 -86.2 413.9 -129.5 398.5C-172.7 383.1 -216.1 374.8 -258.6 356C-301.1 337.1 -342.7 307.7 -371.3 269.8C-399.9 231.9 -415.5 185.4 -428 139.1C-440.4 92.7 -449.7 46.3 -459 0L0 0Z"
          ></path>
        </g>
        <g transform="translate(0, 540)">
          <path
            fill={theme.palette.primary.main}
            fillOpacity="0.4"
            d="M0 -459C46 -445.6 92 -432.2 135.3 -416.6C178.7 -400.9 219.5 -383 261.6 -360C303.7 -337 347.2 -308.9 371.3 -269.8C395.5 -230.7 400.4 -180.6 411.8 -133.8C423.2 -87 441.1 -43.5 459 0L0 0Z"
          ></path>
          <path
            fill={theme.palette.primary.main}
            fillOpacity="0.5"
            d="M0 -229.5C23 -222.8 46 -216.1 67.7 -208.3C89.4 -200.5 109.7 -191.5 130.8 -180C151.8 -168.5 173.6 -154.4 185.7 -134.9C197.8 -115.3 200.2 -90.3 205.9 -66.9C211.6 -43.5 220.6 -21.8 229.5 0L0 0Z"
          ></path>
        </g>
      </svg>
    </Box>
  );
};

export default BackgroundScene;
