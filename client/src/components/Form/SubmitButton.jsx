import PropTypes from 'prop-types';

import { Button } from '@mui/material';

const SubmitButton = ({ children, ...rest }) => {
  return (
    <Button type="submit" variant="contained" {...rest}>
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SubmitButton;
