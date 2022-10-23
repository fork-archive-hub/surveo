import PropTypes from 'prop-types';

import { Stack } from '@mui/material';

import UserSurvey from './UserSurvey';

const UserSurveyStack = ({ surveys }) => {
  return (
    <Stack sx={{ width: 1 }}>
      {surveys.map((survey) => (
        <UserSurvey key={survey._id} survey={survey} />
      ))}
    </Stack>
  );
};

UserSurveyStack.propTypes = {
  surveys: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
    })
  ),
};

export default UserSurveyStack;
