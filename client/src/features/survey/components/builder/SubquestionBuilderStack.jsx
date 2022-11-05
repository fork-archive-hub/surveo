import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import { useFormContext, useFieldArray } from 'react-hook-form';

import SubquestionBuilder from './SubquestionBuilder';

import { SubquestionTemplate } from '../../templates/SubquestionTemplate';

import { Button } from '../../../../components';

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
    <Stack>
      {fields.map((field, index) => (
        <Stack key={field.id}>
          <SubquestionBuilder path={`${path}[${index}]`} index={index} questionAnswersPath={questionAnswersPath} />
          <Button color="error" onClick={handleRemoveSubquestion}>
            Remove subquestion #{index + 1}
          </Button>
        </Stack>
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
