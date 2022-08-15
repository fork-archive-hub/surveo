import PropTypes from 'prop-types';

import { Stack, Button } from '@mui/material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import CreateSubquestionForm from './CreateSubquestionForm';

import { SubquestionTemplate } from '../templates';

const CreateSubquestionFormManager = ({ name, parentAnswerField }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: name,
    control: control,
  });

  const handleAddSubquestion = () => {
    append(new SubquestionTemplate());
  };

  const handleRemoveSubquestion = (index) => {
    remove(index);
  };

  return (
    <Stack direction="column" spacing={2}>
      {fields.map((field, index) => (
        <CreateSubquestionForm
          key={field.id}
          name={`${name}[${index}]`}
          index={index}
          parentAnswerField={parentAnswerField}
          onRemoveSubquestion={handleRemoveSubquestion}
        />
      ))}
      <Button onClick={handleAddSubquestion}>Add subquestion</Button>
    </Stack>
  );
};

CreateSubquestionFormManager.propTypes = {
  name: PropTypes.string.isRequired,
  parentAnswerField: PropTypes.string.isRequired,
};

export default CreateSubquestionFormManager;
