import PropTypes from 'prop-types';

import { Card, CardHeader, CardActions, Stack, Typography, Tooltip } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';

import { useFormContext } from 'react-hook-form';

import { FormGroup, FormControlLabel, Checkbox } from '../../../../components/Form';

const RequirementConfigurationFieldset = ({ name, parentAnswerField }) => {
  const { setValue, getValues, watch } = useFormContext();
  const answers = watch(parentAnswerField);

  const setRequirements = (requirements) => {
    setValue(name, requirements);
  };

  const handleChange = (event) => {
    const requirements = getValues(name);

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
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={1}>
            <Typography variant="h6">Requirements</Typography>
            <Tooltip title="Requirements are used to determine which answer from the parent question needs to be selected to show this subquestion.">
              <InfoOutlined fontSize="small" />
            </Tooltip>
          </Stack>
        }
        disableTypography
      />
      <CardActions sx={{ p: 2 }}>
        <FormGroup onChange={handleChange}>
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

RequirementConfigurationFieldset.propTypes = {
  name: PropTypes.string.isRequired,
  parentAnswerField: PropTypes.string.isRequired,
};

export default RequirementConfigurationFieldset;
