import { Card, CardHeader, CardActions } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import { FormGroup, FormControlLabel, Switch } from '../../../../components/form';

const AccessibilityFieldset = () => {
  const { control } = useFormContext();

  return (
    <Card elevation={2}>
      <CardHeader
        title="Survey Accessibility"
        titleTypographyProps={{ variant: 'body1', display: 'block', align: 'center' }}
      />
      <CardActions sx={{ p: 2, pt: 0 }}>
        <FormGroup sx={{ width: 1 }}>
          <FormControlLabel
            label="Accept votes"
            control={
              <Controller
                control={control}
                name="open"
                render={({ field }) => <Switch checked={field.value} {...field} />}
              />
            }
          />
        </FormGroup>
      </CardActions>
    </Card>
  );
};

export default AccessibilityFieldset;
