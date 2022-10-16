import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Paper, Stack } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import AnswerTextFieldStack from './AnswerTextFieldStack';
import SubquestionRequirements from './SubquestionRequirements';

import { TextField, Button } from '../../../../components/form';

const SubquestionBuilder = ({ name, index, parentAnswerField, onRemoveSubquestion }) => {
  const { control } = useFormContext();

  const handleRemoveSubquestion = () => {
    if (onRemoveSubquestion) {
      onRemoveSubquestion(index);
    }
  };

  return (
    <Card>
      <CardHeader
        title={`Subquestion ${index + 1}`}
        titleTypographyProps={{ variant: 'h6', display: 'block', align: 'center' }}
      />
      <CardActions sx={{ p: 2, pt: 0 }}>
        <Stack direction="column" spacing={2} sx={{ width: 1 }}>
          <Controller
            control={control}
            name={`${name}.text`}
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
            <AnswerTextFieldStack name={`${name}.answers`} />
          </Paper>
          <SubquestionRequirements name={`${name}.requirements`} parentAnswerField={parentAnswerField} />
          <Button onClick={handleRemoveSubquestion}>Remove subquestion #{index + 1}</Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

SubquestionBuilder.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  parentAnswerField: PropTypes.string.isRequired,
  onRemoveSubquestion: PropTypes.func.isRequired,
};

export default SubquestionBuilder;
