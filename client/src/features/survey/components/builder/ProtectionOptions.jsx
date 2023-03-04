import { Card, CardHeader, CardActions } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import FormGroup from '../../../../components/form/FormGroup';
import FormControlLabel from '../../../../components/form/FormControlLabel';
import Checkbox from '../../../../components/form/Checkbox';

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
                render={(controller) => <Checkbox checked={controller.field.value} {...controller.field} />}
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
                render={(controller) => <Checkbox checked={controller.field.value} {...controller.field} />}
              />
            }
          />
        </FormGroup>
      </CardActions>
    </Card>
  );
};

export default ProtectionOptions;
