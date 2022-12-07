import PropTypes from 'prop-types';

import { Box, useTheme } from '@mui/material';

import { Chart as ChartJS, ArcElement, Tooltip, Legend, Colors } from 'chart.js';
import { Pie } from 'react-chartjs-2';

import { findImageMarkdown } from '../../utils/findImageMarkdown';

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

const PieChart = ({ answers }) => {
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
    labels: answers.map((answer) => {
      const image = findImageMarkdown(answer.text);

      return image.found ? image.title : answer.text;
    }),
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
      <Pie options={options} data={data} />
    </Box>
  );
};

PieChart.propTypes = {
  answers: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      votes: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default PieChart;
