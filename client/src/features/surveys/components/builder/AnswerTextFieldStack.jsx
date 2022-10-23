import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import AnswerTextField from './AnswerTextField';

import { AnswerTemplate } from '../../templates/AnswerTemplate';
import { updateIndexFields } from '../../utils/updateIndexFields';

import { Button } from '../../../../components/form';

const AnswerTextFieldStack = ({ path }) => {
  const { control, getValues, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: path,
    control: control,
  });

  const updateAnswerIndexes = () => {
    setValue(path, updateIndexFields(getValues(path)));
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
    <Stack>
      {fields.map((field, index) => (
        <AnswerTextField
          key={field.id}
          path={`${path}[${index}]`}
          index={index}
          isRemoveButtonDisabled={fields.length <= 2}
          onRemoveAnswer={handleRemoveAnswer}
        />
      ))}
      <Button onClick={handleAddAnswer}>Add answer</Button>
    </Stack>
  );
};

AnswerTextFieldStack.propTypes = {
  path: PropTypes.string.isRequired,
};

export default AnswerTextFieldStack;
