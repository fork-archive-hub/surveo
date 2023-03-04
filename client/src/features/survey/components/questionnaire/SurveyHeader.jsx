import PropTypes from 'prop-types';

import { Card, CardHeader } from '@mui/material';

import { convertDateToHumanFormat } from '../../utils/convertDateToHumanFormat';

const SurveyHeader = ({ name, author, createdAt }) => {
  return (
    <Card>
      <CardHeader title={name} subheader={`Created by ${author} on ${convertDateToHumanFormat(createdAt)}`} />
    </Card>
  );
};

SurveyHeader.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default SurveyHeader;
