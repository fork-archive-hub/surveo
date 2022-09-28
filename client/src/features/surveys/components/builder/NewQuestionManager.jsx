import PropTypes from 'prop-types';

import { Stack, Divider } from '@mui/material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import NewQuestion from './NewQuestion';

import { QuestionTemplate } from '../../templates/QuestionTemplate';

import { Button } from '../../../../components/form';

const NewQuestionManager = ({ name }) => {
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
        <NewQuestion
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

NewQuestionManager.propTypes = {
  name: PropTypes.string.isRequired,
};

export default NewQuestionManager;
