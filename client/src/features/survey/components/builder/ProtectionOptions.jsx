import { Card, CardHeader, CardActions } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import { FormGroup, FormControlLabel, Checkbox } from '../../../../components';

const ProtectionOptions = () => {
  const { control } = useFormContext();

  return (
    <Card elevation={2}>
      <CardHeader title="Survey Protection" />
      <CardActions>
        <FormGroup>
          <FormControlLabel
            label="Captcha"
            control={
              <Controller
                control={control}
                name="protection.captcha"
                render={({ field }) => <Checkbox checked={field.value} {...field} />}
              />
            }
          />
          <FormControlLabel
            label="Prevent duplicates"
            labelPlacement="end"
            control={
              <Controller
                control={control}
                name="protection.ipRestriction"
                render={({ field }) => <Checkbox checked={field.value} {...field} />}
              />
            }
          />
        </FormGroup>
      </CardActions>
    </Card>
  );
};

export default ProtectionOptions;
