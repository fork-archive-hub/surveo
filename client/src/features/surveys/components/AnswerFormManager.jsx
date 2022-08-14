import PropTypes from 'prop-types';

import { Stack, Button } from '@mui/material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import AnswerForm from './AnswerForm';

import { AnswerTemplate } from '../templates';
import { updateIndexFields } from '../utils/updateIndexFields';

const AnswerFormManager = ({ name }) => {
  const { control, getValues, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: name,
    control: control,
  });

  const updateAnswerIndexes = () => {
    setValue(name, updateIndexFields(getValues(name)));
  };

  const handleAddAnswer = () => {
    append(new AnswerTemplate());
    updateAnswerIndexes();
  };

  const handleRemoveAnswer = (index) => {
    if (fields.length > 2) {
      remove(index);
      updateAnswerIndexes();
    }
  };

  return (
    <Stack direction="column" spacing={2}>
      {fields.map((field, index) => (
        <AnswerForm
          key={field.id}
          name={`${name}[${index}]`}
          index={index}
          isRemoveButtonDisabled={fields.length <= 2}
          onRemoveAnswer={handleRemoveAnswer}
        />
      ))}
      <Button onClick={handleAddAnswer}>Add answer</Button>
    </Stack>
  );
};

AnswerFormManager.propTypes = {
  name: PropTypes.string.isRequired,
};

export default AnswerFormManager;
