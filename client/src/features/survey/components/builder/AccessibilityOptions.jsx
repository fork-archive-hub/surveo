import { Card, CardHeader, CardActions } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import FormGroup from '../../../../components/form/FormGroup';
import FormControlLabel from '../../../../components/form/FormControlLabel';
import Checkbox from '../../../../components/form/Checkbox';

const AccessibilityOptions = () => {
  const { control } = useFormContext();

  return (
    <Card elevation={2}>
      <CardHeader title="Survey Accessibility" />
      <CardActions>
        <FormGroup>
          <FormControlLabel
            label="Accept votes"
            control={
              <Controller
                control={control}
                name="open"
                render={(controller) => <Checkbox checked={controller.field.value} {...controller.field} />}
              />
            }
          />
        </FormGroup>
      </CardActions>
    </Card>
  );
};

export default AccessibilityOptions;
