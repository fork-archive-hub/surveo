import PropTypes from 'prop-types';

import { Stack, Divider } from '@mui/material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import QuestionBuilder from './QuestionBuilder';

import { QuestionTemplate } from '../../templates/QuestionTemplate';

import { Button } from '../../../../components/form';

const QuestionBuilderStack = ({ path }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: path,
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
    <Stack divider={<Divider />}>
      {fields.map((field, index) => (
        <QuestionBuilder
          key={field.id}
          path={`${path}[${index}]`}
          index={index}
          isRemoveButtonDisabled={fields.length <= 1}
          onRemoveQuestion={handleRemoveQuestion}
        />
      ))}
      <Button onClick={handleAddQuestion}>Add question</Button>
    </Stack>
  );
};

QuestionBuilderStack.propTypes = {
  path: PropTypes.string.isRequired,
};

export default QuestionBuilderStack;
