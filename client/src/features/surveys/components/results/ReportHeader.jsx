import PropTypes from 'prop-types';

import { Card, CardHeader } from '@mui/material';

const ReportHeader = ({ name, surveyId }) => {
  return (
    <Card>
      <CardHeader
        title={name}
        subheader={surveyId}
        titleTypographyProps={{ variant: 'h5', display: 'block', align: 'center' }}
        subheaderTypographyProps={{ variant: 'caption', display: 'block', align: 'center' }}
      />
    </Card>
  );
};

ReportHeader.propTypes = {
  name: PropTypes.string.isRequired,
  surveyId: PropTypes.string.isRequired,
};

export default ReportHeader;
