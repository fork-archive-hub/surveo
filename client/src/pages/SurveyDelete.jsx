import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { Grid, ClickAwayListener, Card, CardHeader, CardActions } from '@mui/material';

import { toast } from 'react-toastify';

import { Button } from '../components/Form';

import { feathers } from '../redux';

const SurveyDelete = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const params = useParams();

  const onClickAway = () => {
    navigate(-1);
  };

  const onCancel = () => {
    navigate(-1);
  };

  const onDelete = async () => {
    if (params.surveyId !== null) {
      const result = await dispatch(feathers.survey.remove({ surveyId: params.surveyId }));

      if (result.error) {
        return toast.error(result.error);
      }

      toast.success('Survey deleted');
      navigate(-1);
    }
  };

  return (
    <Grid container justifyContent="center" maxWidth="xl">
      <Grid container item xs={12} sm={8} md={5} lg={4} xl={3}>
        <ClickAwayListener onClickAway={onClickAway}>
          <Card sx={{ width: 1 }}>
            <CardHeader
              title="Delete Survey"
              subheader="Are you sure you want to delete this survey?"
              titleTypographyProps={{ variant: 'h5', display: 'block', align: 'center' }}
              subheaderTypographyProps={{ variant: 'caption', display: 'block', align: 'center' }}
            />
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
