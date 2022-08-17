import PropTypes from 'prop-types';

import { Stack, Divider } from '@mui/material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import CreateQuestionFieldset from './CreateQuestionFieldset';

import { QuestionTemplate } from '../../templates';

import { Button } from '../../../../components/Form';

const CreateQuestionFieldsetGroup = ({ name }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: name,
    control: control,
  });

  const handleAddQuestion = () => {
    append(new QuestionTemplate());
  };

  const handleRemoveQuestion = (index) => {
    if (fields.length > 1) {
      remove(index);
    }
  };

  return (
    <Stack direction="column" spacing={2} divider={<Divider />}>
      {fields.map((field, index) => (
        <CreateQuestionFieldset
          key={field.id}
          name={`${name}[${index}]`}
          index={index}
          isRemoveButtonDisabled={fields.length <= 1}
          onRemoveQuestion={handleRemoveQuestion}
        />
      ))}
      <Button onClick={handleAddQuestion}>Add question</Button>
    </Stack>
  );
};

CreateQuestionFieldsetGroup.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CreateQuestionFieldsetGroup;
