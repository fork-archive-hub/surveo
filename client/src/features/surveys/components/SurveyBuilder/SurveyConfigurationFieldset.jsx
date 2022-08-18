import { Card, CardHeader, CardActions, Paper, Stack, Typography } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import { TextField, FormControlLabel, Switch } from '../../../../components/Form';

const SurveyConfigurationFieldset = () => {
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader
        title="Survey Configuration"
        titleTypographyProps={{ variant: 'h6', display: 'block', align: 'center' }}
      />
      <CardActions sx={{ p: 2 }}>
        <Stack direction="column" spacing={2} sx={{ width: 1 }}>
          <Controller
            control={control}
            name="name"
            render={(controller) => <TextField label="Survey name" controller={controller} />}
          />
          <Paper elevation={2} sx={{ p: 2 }}>
            <Stack direction="column" spacing={2}>
              <Typography variant="body1" display="block" align="center">
                Survey protection
              </Typography>
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
                control={
                  <Controller
                    control={control}
                    name="protection.ipRestriction"
                    render={({ field }) => <Switch checked={field.value} {...field} />}
                  />
                }
              />
            </Stack>
          </Paper>
        </Stack>
      </CardActions>
    </Card>
  );
};

export default SurveyConfigurationFieldset;
