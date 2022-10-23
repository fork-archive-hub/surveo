import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import { Paper, Stack, Typography, Tooltip } from '@mui/material';
import { PreviewOutlined, BarChartOutlined, EditOutlined, DeleteOutline } from '@mui/icons-material';

import { convertDateToHumanFormat } from '../../utils/convertDateToHumanFormat';

import { IconButton } from '../../../../components/form';

const UserSurvey = ({ survey }) => {
  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
        <Stack spacing={1}>
          <Typography variant="h6">{survey.name}</Typography>
          <Typography variant="caption">Created on {convertDateToHumanFormat(survey.createdAt)}</Typography>
        </Stack>
        <Stack direction="row" sx={{ flexGrow: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
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

UserSurvey.propTypes = {
  survey: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserSurvey;
