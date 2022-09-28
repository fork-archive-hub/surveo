import { Card, CardHeader, CardActions } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import { FormGroup, FormControlLabel, Switch } from '../../../../components/form';

const ProtectionOptions = () => {
  const { control } = useFormContext();

  return (
    <Card elevation={2}>
      <CardHeader
        title="Survey Protection"
        titleTypographyProps={{ variant: 'body1', display: 'block', align: 'center' }}
      />
      <CardActions sx={{ p: 2, pt: 0 }}>
        <FormGroup sx={{ width: 1 }}>
          <FormControlLabel
            label="Captcha"
            control={
              <Controller
                control={control}
                name="protection.captcha"
                render={({ field }) => <Switch checked={field.value} {...field} />}
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
                render={({ field }) => <Switch checked={field.value} {...field} />}
              />
            }
          />
        </FormGroup>
      </CardActions>
    </Card>
  );
};

export default ProtectionOptions;
