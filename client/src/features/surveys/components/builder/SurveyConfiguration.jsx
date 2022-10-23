import { Card, CardHeader, CardContent, Stack } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import { TextField } from '../../../../components/form';

import AccessibilityOptions from './AccessibilityOptions';
import ProtectionOptions from './ProtectionOptions';

const SurveyConfiguration = () => {
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader title="Survey Configuration" />
      <CardContent sx={{ px: 2, pt: 0, '&:last-child': { pb: 2 } }}>
        <Stack sx={{ width: 1 }}>
          <Controller
            control={control}
            name="name"
            render={({ field, fieldState }) => (
              <TextField
                label="Survey name"
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
                {...field}
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
