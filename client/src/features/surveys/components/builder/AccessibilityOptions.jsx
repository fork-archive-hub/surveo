import { Card, CardHeader, CardActions } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import { FormGroup, FormControlLabel, Checkbox } from '../../../../components/form';

const AccessibilityOptions = () => {
  const { control } = useFormContext();

  return (
    <Card elevation={2}>
      <CardHeader title="Survey Accessibility" />
      <CardActions>
        <FormGroup sx={{ width: 1 }}>
          <FormControlLabel
            label="Accept votes"
            control={
              <Controller
                control={control}
                name="open"
                render={({ field }) => <Checkbox checked={field.value} {...field} />}
              />
            }
          />
        </FormGroup>
      </CardActions>
    </Card>
  );
};

export default AccessibilityOptions;
