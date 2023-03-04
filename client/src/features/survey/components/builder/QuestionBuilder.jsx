import PropTypes from 'prop-types';

import { Stack, Card, CardHeader, CardActions, Paper } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import AnswerSetBuilder from './AnswerSetBuilder';
import SubquestionSetBuilder from './SubquestionSetBuilder';

import TextField from '../../../../components/form/TextField';

const QuestionBuilder = ({ path, index }) => {
  const { control } = useFormContext();

  return (
    <Stack>
      <Card>
        <CardHeader title={`Question ${index + 1}`} />
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
              <AnswerSetBuilder path={`${path}.answers`} />
            </Paper>
          </Stack>
        </CardActions>
      </Card>
      <SubquestionSetBuilder path={`${path}.subquestions`} questionAnswersPath={`${path}.answers`} />
    </Stack>
  );
};

QuestionBuilder.propTypes = {
  path: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default QuestionBuilder;
