import PropTypes from 'prop-types';

import { Stack, Divider, Button } from '@mui/material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import QuestionForm from './QuestionForm';

import { QuestionTemplate } from '../templates';

const QuestionFormManager = ({ name }) => {
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
        <QuestionForm
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

QuestionFormManager.propTypes = {
  name: PropTypes.string.isRequired,
};

export default QuestionFormManager;
