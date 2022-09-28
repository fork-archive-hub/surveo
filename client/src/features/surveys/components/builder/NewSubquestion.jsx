import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Paper, Stack } from '@mui/material';

import { useFormContext, Controller } from 'react-hook-form';

import NewAnswerManager from './NewAnswerManager';
import SubquestionRequirements from './SubquestionRequirements';

import { TextField, Button } from '../../../../components/form';

const NewSubquestion = ({ name, index, parentAnswerField, onRemoveSubquestion }) => {
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
            render={(controller) => <TextField label="Question" controller={controller} />}
          />
          <Paper elevation={2} sx={{ p: 2 }}>
            <NewAnswerManager name={`${name}.answers`} />
          </Paper>
          <SubquestionRequirements name={`${name}.requirements`} parentAnswerField={parentAnswerField} />
          <Button onClick={handleRemoveSubquestion}>Remove subquestion #{index + 1}</Button>
        </Stack>
      </CardActions>
    </Card>
  );
};

NewSubquestion.propTypes = {
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  parentAnswerField: PropTypes.string.isRequired,
  onRemoveSubquestion: PropTypes.func.isRequired,
};

export default NewSubquestion;
