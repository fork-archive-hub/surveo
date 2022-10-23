import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import SubquestionBuilder from './SubquestionBuilder';

import { SubquestionTemplate } from '../../templates/SubquestionTemplate';

import { Button } from '../../../../components/form';

const SubquestionBuilderStack = ({ path, questionAnswersPath }) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: path,
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
        <SubquestionBuilder
          key={field.id}
          path={`${path}[${index}]`}
          index={index}
          questionAnswersPath={questionAnswersPath}
          onRemoveSubquestion={handleRemoveSubquestion}
        />
      ))}
      <Button onClick={handleAddSubquestion}>Add subquestion</Button>
    </Stack>
  );
};

SubquestionBuilderStack.propTypes = {
  path: PropTypes.string.isRequired,
  questionAnswersPath: PropTypes.string.isRequired,
};

export default SubquestionBuilderStack;
