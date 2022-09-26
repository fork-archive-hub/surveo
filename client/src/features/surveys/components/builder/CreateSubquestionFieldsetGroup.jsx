import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import CreateSubquestionFieldset from './CreateSubquestionFieldset';

import { SubquestionTemplate } from '../../templates/SubquestionTemplate';

import { Button } from '../../../../components/form';

const CreateSubquestionFieldsetGroup = ({ name, parentAnswerField }) => {
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
        <CreateSubquestionFieldset
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

CreateSubquestionFieldsetGroup.propTypes = {
  name: PropTypes.string.isRequired,
  parentAnswerField: PropTypes.string.isRequired,
};

export default CreateSubquestionFieldsetGroup;
