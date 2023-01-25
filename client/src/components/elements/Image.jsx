import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { Box } from '@mui/material';

const Image = forwardRef((props, ref) => {
  return (
    <Box
      component="img"
      loading="lazy"
      src={props.url}
      alt={props.title}
      sx={{ maxWidth: 1, borderRadius: 1, my: 1 }}
      ref={ref}
    />
  );
});

Image.displayName = 'Image';

Image.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Image;
