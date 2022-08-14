import { Paper, Stack, Typography, TextField, FormControlLabel, Switch } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

const SurveyInformationForm = () => {
  const { control } = useFormContext();

  return (
    <Paper elevation={1} sx={{ p: 2 }}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h6" display="block" align="center">
          Survey information
        </Typography>

        <Controller
          control={control}
          name="name"
          render={({ field, fieldState }) => (
            <TextField
              size="small"
              variant="outlined"
              label="Survey name"
              error={!!fieldState.error}
              helperText={fieldState.error && fieldState.error.message}
              {...field}
            />
          )}
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
    </Paper>
  );
};

export default SurveyInformationForm;
