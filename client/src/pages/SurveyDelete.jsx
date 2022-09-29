import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid, Card, CardContent, CardActions, Stack, Typography } from '@mui/material';
import { WarningOutlined } from '@mui/icons-material';

import { toast } from 'react-toastify';

import { Button } from '../components/form';

import { feathers } from '../redux';

const SurveyDelete = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/');
  };

  const handleDelete = async () => {
    if (params.surveyId !== null) {
      const result = await dispatch(feathers.survey.remove({ surveyId: params.surveyId }));

      if (result.error) {
        toast.error(result.error);
      } else {
        toast.success('Survey deleted');
      }

      navigate('/');
    }
  };

  return (
    <Grid container justifyContent="center" sx={{ py: 2 }}>
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
        <Card sx={{ width: 1 }}>
          <CardContent>
            <Stack direction="column" alignItems="center">
              <WarningOutlined sx={{ fontSize: 128 }} />
              <Typography variant="h5" align="center">
                Delete Survey
              </Typography>
              <Typography variant="caption" align="center">
                Are you sure you want to delete this survey?
              </Typography>
            </Stack>
          </CardContent>
          <CardActions sx={{ justifyContent: 'center' }}>
            <Button onClick={handleDelete}>Delete survey</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SurveyDelete;
