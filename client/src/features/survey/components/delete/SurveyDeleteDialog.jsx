import PropTypes from 'prop-types';

import { Card, CardContent, CardActions, Typography, Stack } from '@mui/material';
import { WarningOutlined } from '@mui/icons-material';

import { Button } from '../../../../components';

const SurveyDeleteDialog = ({ onDeleteSurvey, onCancelAction }) => {
  const handleDeleteSurvey = () => {
    if (onDeleteSurvey) {
      onDeleteSurvey();
    }
  };

  const handleActionCancel = () => {
    if (onCancelAction) {
      onCancelAction();
    }
  };

  return (
    <Card>
      <CardContent>
        <Stack spacing={1} sx={{ alignItems: 'center' }}>
          <WarningOutlined sx={{ fontSize: 128 }} />
          <Typography variant="h5" sx={{ textAlign: 'center' }}>
            Delete Survey
          </Typography>
          <Typography variant="caption" sx={{ textAlign: 'center' }}>
            Are you sure you want to delete this survey?
          </Typography>
        </Stack>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button onClick={handleDeleteSurvey}>Delete survey</Button>
        <Button onClick={handleActionCancel}>Cancel</Button>
      </CardActions>
    </Card>
  );
};

SurveyDeleteDialog.propTypes = {
  onDeleteSurvey: PropTypes.func.isRequired,
  onCancelAction: PropTypes.func.isRequired,
};

export default SurveyDeleteDialog;
