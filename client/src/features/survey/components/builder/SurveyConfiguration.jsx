import { Card, CardHeader, CardContent, Stack } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import AccessibilityOptions from './AccessibilityOptions';
import ProtectionOptions from './ProtectionOptions';

import TextField from '../../../../components/form/TextField';

const SurveyConfiguration = () => {
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader title="Survey Configuration" />
      <CardContent sx={{ px: 2, pt: 0, '&:last-child': { pb: 2 } }}>
        <Stack>
          <Controller
            control={control}
            name="name"
            render={(controller) => (
              <TextField
                label="Survey name"
                error={Boolean(controller.fieldState.error)}
                helperText={controller.fieldState.error?.message}
                {...controller.field}
              />
            )}
          />
          <AccessibilityOptions />
          <ProtectionOptions />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SurveyConfiguration;
