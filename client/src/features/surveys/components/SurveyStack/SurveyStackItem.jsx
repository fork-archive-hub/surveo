import PropTypes from 'prop-types';

import { Paper, Stack, Typography, Tooltip } from '@mui/material';
import { PreviewOutlined, BarChartOutlined, EditOutlined, DeleteOutline } from '@mui/icons-material';

import { convertDateToHumanFormat } from '../../utils/convertDateToHumanFormat';

import { IconButton } from '../../../../components/Form';

const SurveyStackItem = ({ survey, onButtonClick }) => {
  const createActionHandler = (action) => {
    return () => {
      if (onButtonClick) {
        onButtonClick(action, survey._id);
      }
    };
  };

  return (
    <Paper elevation={2} sx={{ p: 2 }}>
      <Stack direction="row" flexWrap="wrap" spacing={2}>
        <Stack direction="column">
          <Typography variant="h6">{survey.name}</Typography>
          <Typography variant="caption">Created on {convertDateToHumanFormat(survey.createdAt)}</Typography>
        </Stack>
        <Stack direction="row" justifyContent="flex-end" alignItems="center" spacing={2} sx={{ flexGrow: 1 }}>
          <Tooltip title="Preview survey">
            <IconButton onClick={createActionHandler('preview')}>
              <PreviewOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="View survey results">
            <IconButton onClick={createActionHandler('view_results')}>
              <BarChartOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="Edit survey">
            <IconButton onClick={createActionHandler('edit')}>
              <EditOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete survey">
            <IconButton onClick={createActionHandler('delete')}>
              <DeleteOutline />
            </IconButton>
          </Tooltip>
        </Stack>
      </Stack>
    </Paper>
  );
};

SurveyStackItem.propTypes = {
  survey: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default SurveyStackItem;
