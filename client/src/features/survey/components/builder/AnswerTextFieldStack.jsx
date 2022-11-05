import PropTypes from 'prop-types';

import { Stack, IconButton } from '@mui/material';
import { DeleteOutline } from '@mui/icons-material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import AnswerTextField from './AnswerTextField';

import { AnswerTemplate } from '../../templates/AnswerTemplate';
import { updateIndexFields } from '../../utils/updateIndexFields';

import { Button } from '../../../../components';

const AnswerTextFieldStack = ({ path }) => {
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
          <AnswerTextField path={`${path}[${index}]`} />
          <IconButton color="error" disabled={!enoughFields} onClick={() => handleRemoveAnswer(index)}>
            <DeleteOutline />
          </IconButton>
        </Stack>
      ))}
      <Button onClick={handleAddAnswer}>Add answer</Button>
    </Stack>
  );
};

AnswerTextFieldStack.propTypes = {
  path: PropTypes.string.isRequired,
};

export default AnswerTextFieldStack;
