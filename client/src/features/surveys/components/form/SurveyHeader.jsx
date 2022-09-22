import PropTypes from 'prop-types';

import { Card, CardHeader } from '@mui/material';

import { convertDateToHumanFormat } from '../../utils/convertDateToHumanFormat';

const SurveyHeader = ({ name, author, createdAt }) => {
  return (
    <Card>
      <CardHeader
        title={name}
        subheader={`Created by ${author} on ${convertDateToHumanFormat(createdAt)}`}
        titleTypographyProps={{ variant: 'h5', display: 'block', align: 'center' }}
        subheaderTypographyProps={{ variant: 'caption', display: 'block', align: 'center' }}
      />
    </Card>
  );
};

SurveyHeader.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default SurveyHeader;
