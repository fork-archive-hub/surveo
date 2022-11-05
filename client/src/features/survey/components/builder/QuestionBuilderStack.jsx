import PropTypes from 'prop-types';

import { Stack, Divider } from '@mui/material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import QuestionBuilder from './QuestionBuilder';

import { QuestionTemplate } from '../../templates/QuestionTemplate';

import { Button } from '../../../../components';

const QuestionBuilderStack = ({ path }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: path,
    control: control,
  });

  const enoughFields = fields.length > 1;

  const handleAddQuestion = () => {
    append(new QuestionTemplate());
  };

  const handleRemoveQuestion = (index) => {
    if (enoughFields) {
      remove(index);
    }
  };

  return (
    <Stack divider={<Divider />}>
      {fields.map((field, index) => (
        <Stack key={field.id}>
          <QuestionBuilder path={`${path}[${index}]`} index={index} />
          <Button color="error" disabled={!enoughFields} onClick={() => handleRemoveQuestion(index)}>
            Remove question #{index + 1}
          </Button>
        </Stack>
      ))}
      <Button onClick={handleAddQuestion}>Add question</Button>
    </Stack>
  );
};

QuestionBuilderStack.propTypes = {
  path: PropTypes.string.isRequired,
};

export default QuestionBuilderStack;
