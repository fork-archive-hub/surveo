import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Stack, Typography, Tooltip } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';

import { useFormContext } from 'react-hook-form';

import { FormGroup, FormControlLabel, Checkbox } from '../../../../components/form';

const SubquestionRequirements = ({ path, questionAnswersPath }) => {
  const { setValue, getValues, watch } = useFormContext();
  const answers = watch(questionAnswersPath);

  const setRequirements = (requirements) => {
    setValue(path, requirements);
  };

  const handleChange = (event) => {
    const requirements = getValues(path);

    if (event.target.checked) {
      setRequirements([...requirements, event.target.value]);
    } else {
      setRequirements(requirements.filter((requirement) => requirement !== event.target.value));
    }
  };

  return (
    <Card elevation={2}>
      <CardHeader
        title={
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant="h6">Requirements</Typography>
            <Tooltip title="Requirements are used to determine which answer from the parent question needs to be selected to show this subquestion.">
              <InfoOutlined sx={{ fontSize: 'medium' }} />
            </Tooltip>
          </Stack>
        }
        disableTypography
      />
      <CardActions>
        <FormGroup onChange={handleChange} sx={{ width: 1 }}>
          {answers.map((answer, index) => (
            <FormControlLabel
              key={answer + index}
              label={`Answer #${index + 1}`}
              control={<Checkbox name="requirements" value={index} />}
            />
          ))}
        </FormGroup>
      </CardActions>
    </Card>
  );
};

SubquestionRequirements.propTypes = {
  path: PropTypes.string.isRequired,
  questionAnswersPath: PropTypes.string.isRequired,
};

export default SubquestionRequirements;
