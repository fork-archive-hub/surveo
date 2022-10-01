import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Paper, Stack, Typography, Tooltip } from '@mui/material';
import { PreviewOutlined, BarChartOutlined, EditOutlined, DeleteOutline } from '@mui/icons-material';

import { convertDateToHumanFormat } from '../../utils/convertDateToHumanFormat';

import { IconButton } from '../../../../components/form';

const SurveyBar = ({ survey }) => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Stack direction="row" flexWrap="wrap" spacing={2}>
        <Stack direction="column">
          <Typography variant="h6">{survey.name}</Typography>
          <Typography variant="caption">Created on {convertDateToHumanFormat(survey.createdAt)}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
          <Tooltip title="Preview survey">
            <IconButton to={`/surveys/${survey._id}/form`} component={Link}>
              <PreviewOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="View survey results">
            <IconButton to={`/surveys/${survey._id}/results`} component={Link}>
              <BarChartOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit survey">
            <IconButton to={`/surveys/${survey._id}/edit`} component={Link}>
              <EditOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete survey">
            <IconButton to={`/surveys/${survey._id}/delete`} component={Link}>
              <DeleteOutline />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Paper>
  );
};

SurveyBar.propTypes = {
  survey: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default SurveyBar;
