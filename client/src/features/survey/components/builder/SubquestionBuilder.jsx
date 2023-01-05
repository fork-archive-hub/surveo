import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Paper, Stack } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import AnswerTextFieldStack from './AnswerTextFieldStack';
import SubquestionRequirements from './SubquestionRequirements';

import TextField from '../../../../components/form/TextField';

const SubquestionBuilder = ({ path, index, questionAnswersPath }) => {
  const { control } = useFormContext();

  return (
    <Card>
      <CardHeader title={`Subquestion ${index + 1}`} />
      <CardActions>
        <Stack sx={{ width: 1 }}>
          <Controller
            control={control}
            name={`${path}.text`}
            render={({ field, fieldState }) => (
              <TextField
                label="Question"
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
                {...field}
              />
            )}
          />
          <Paper elevation={2} sx={{ p: 2 }}>
            <AnswerTextFieldStack path={`${path}.answers`} />
          </Paper>
          <SubquestionRequirements path={`${path}.requirements`} questionAnswersPath={questionAnswersPath} />
        </Stack>
      </CardActions>
    </Card>
  );
};

SubquestionBuilder.propTypes = {
  path: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  questionAnswersPath: PropTypes.string.isRequired,
};

export default SubquestionBuilder;
