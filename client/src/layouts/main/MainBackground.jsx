import { Box } from '@mui/material';

const MainBackground = () => {
  const stroke = '#074A3A';
  const strokeWidth = 20;
  const strokeOpacity = 0.3;

  return (
    <Box sx={{ position: 'fixed', top: 0, left: 0, width: 1, height: 1, zIndex: -1, lineHeight: 0 }}>
      <svg viewBox="0 0 960 540" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <g transform="translate(904 201)">
          <path
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeOpacity={strokeOpacity}
            d="M101.4 -97.4C122.4 -80.4 124.2 -40.2 125.1 0.9C126.1 42.1 126.1 84.1 105.1 114.1C84.1 144.1 42.1 161.9 9.8 152.1C-22.5 142.4 -45 105 -66.9 75C-88.8 45 -110 22.5 -113.2 -3.2C-116.4 -28.9 -101.6 -57.8 -79.7 -74.9C-57.8 -91.9 -28.9 -97 5.6 -102.7C40.2 -108.3 80.4 -114.4 101.4 -97.4Z"
          ></path>
        </g>
        <g transform="translate(413 24)">
          <path
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeOpacity={strokeOpacity}
            d="M73.2 -78.4C94.4 -52 110.9 -26 116.1 5.2C121.3 36.4 115.2 72.8 94 94.6C72.8 116.3 36.4 123.5 2.3 121.3C-31.9 119 -63.7 107.3 -81.1 85.5C-98.4 63.7 -101.3 31.9 -100.3 1C-99.4 -29.9 -94.5 -59.8 -77.2 -86.2C-59.8 -112.6 -29.9 -135.4 -2 -133.5C26 -131.5 52 -104.7 73.2 -78.4Z"
          ></path>
        </g>
        <g transform="translate(18 459)">
          <path
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeOpacity={strokeOpacity}
            d="M66.6 -71.2C87.5 -45.6 106.5 -22.8 105 -1.5C103.6 19.9 81.6 39.8 60.7 59.4C39.8 79 19.9 98.4 -5.2 103.6C-30.3 108.8 -60.7 99.9 -80.4 80.3C-100.2 60.7 -109.4 30.3 -105.8 3.5C-102.3 -23.2 -86 -46.5 -66.3 -72.1C-46.5 -97.6 -23.2 -125.6 -0.2 -125.3C22.8 -125.1 45.6 -96.8 66.6 -71.2Z"
          ></path>
        </g>
        <g transform="translate(488 515)">
          <path
            fill="none"
            stroke={stroke}
            strokeWidth={strokeWidth}
            strokeOpacity={strokeOpacity}
            d="M79.9 -77.2C98.6 -61.2 105.4 -30.6 106 0.6C106.6 31.7 100.8 63.4 82.1 75.6C63.4 87.8 31.7 80.6 3.9 76.7C-24 72.8 -48 72.4 -71.1 60.2C-94.2 48 -116.4 24 -119.2 -2.8C-122 -29.5 -105.3 -59 -82.2 -75.1C-59 -91.2 -29.5 -93.8 0.5 -94.3C30.6 -94.8 61.2 -93.3 79.9 -77.2Z"
          ></path>
        </g>
      </svg>
    </Box>
  );
};

export default MainBackground;
