import PropTypes from 'prop-types';

import { Stack, IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

import { Controller, useFormContext, useFieldArray } from 'react-hook-form';

import { AnswerTemplate } from '../../templates/AnswerTemplate';
import { updateIndexFields } from '../../utils/updateIndexFields';

import Button from '../../../../components/form/Button';
import TextField from '../../../../components/form/TextField';

const AnswerSetBuilder = ({ path }) => {
  const { control, getValues, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: path,
    control: control,
  });

  const enoughFields = fields.length > 2;

  const updateAnswerIndexes = () => {
    setValue(path, updateIndexFields(getValues(path)));
  };

  const handleAddAnswer = () => {
    append(new AnswerTemplate());
    updateAnswerIndexes();
  };

  const handleRemoveAnswer = (index) => {
    if (enoughFields) {
      remove(index);
      updateAnswerIndexes();
    }
  };

  return (
    <Stack>
      {fields.map((field, index) => (
        <Stack direction="row" key={field.id}>
          <Controller
            control={control}
            name={`${path}[${index}].text`}
            render={({ field, fieldState }) => (
              <TextField
                label="Answer"
                error={Boolean(fieldState.error)}
                helperText={fieldState.error?.message}
                fullWidth
                {...field}
              />
            )}
          />
          <IconButton color="error" disabled={!enoughFields} onClick={() => handleRemoveAnswer(index)}>
            <DeleteOutline />
          </IconButton>
        </Stack>
      ))}
      <Button onClick={handleAddAnswer}>Add answer</Button>
    </Stack>
  );
};

AnswerSetBuilder.propTypes = {
  path: PropTypes.string.isRequired,
};

export default AnswerSetBuilder;
