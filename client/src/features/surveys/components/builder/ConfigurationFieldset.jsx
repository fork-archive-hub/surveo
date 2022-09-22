import { Card, CardHeader, CardContent, Stack } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import { TextField } from '../../../../components/form';

import AccessibilityFieldset from './AccessibilityFieldset';
import ProtectionFieldset from './ProtectionFieldset';

const ConfigurationFieldset = () => {
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader
        title="Survey Configuration"
        titleTypographyProps={{ variant: 'h6', display: 'block', align: 'center' }}
      />
      <CardContent sx={{ px: 2, pt: 0, '&:last-child': { pb: 2 } }}>
        <Stack direction="column" spacing={2} sx={{ width: 1 }}>
          <Controller
            control={control}
            name="name"
            render={(controller) => <TextField label="Survey name" controller={controller} />}
          />
          <AccessibilityFieldset />
          <ProtectionFieldset />
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ConfigurationFieldset;
