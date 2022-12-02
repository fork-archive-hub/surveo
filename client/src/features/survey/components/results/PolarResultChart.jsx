import PropTypes from 'prop-types';

import { Box, useTheme } from '@mui/material';

import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend, Colors);

const PolarResultChart = ({ answers }) => {
  const theme = useTheme();

  const options = {
    plugins: {
      legend: {
        labels: {
          color: theme.palette.text.primary,
        },
      },
    },
  };

  const data = {
    labels: answers.map((answer) => answer.text),
    datasets: [
      {
        label: 'Votes',
        data: answers.map((answer) => answer.votes),
        borderWidth: 0.5,
      },
    ],
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 1, height: 1 }}>
      <PolarArea options={options} data={data} />
    </Box>
  );
};

PolarResultChart.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default PolarResultChart;
