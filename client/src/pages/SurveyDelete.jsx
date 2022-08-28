import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid, ClickAwayListener, Card, CardContent, CardActions, Stack, Typography } from '@mui/material';
import { WarningOutlined } from '@mui/icons-material';

import { toast } from 'react-toastify';

import { Button } from '../components/Form';

import { feathers } from '../redux';

const SurveyDelete = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();

  const onClickAway = () => {
    navigate('/');
  };

  const onCancel = () => {
    navigate('/');
  };

  const onDelete = async () => {
    if (params.surveyId !== null) {
      const result = await dispatch(feathers.survey.remove({ surveyId: params.surveyId }));

      if (result.error) {
        toast.error(result.error);
        return navigate('/');
      }

      toast.success('Survey deleted');
      navigate('/');
    }
  };

  return (
    <Grid container justifyContent="center" maxWidth="xl">
      <Grid container item xs={12} sm={8} md={5} lg={4} xl={3}>
        <ClickAwayListener onClickAway={onClickAway}>
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
              <Button onClick={onDelete}>Delete survey</Button>
              <Button onClick={onCancel}>Cancel</Button>
            </CardActions>
          </Card>
        </ClickAwayListener>
      </Grid>
    </Grid>
  );
};

export default SurveyDelete;
