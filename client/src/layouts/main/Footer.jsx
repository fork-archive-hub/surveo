import { Paper, Container, Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container maxWidth="xl">
      <Paper sx={{ p: 1 }}>
        <Typography align="center" variant="caption" display="block" sx={{ color: 'text.secondary' }}>
          © Krawczyk Patryk {currentYear}. All Rights Reserved.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Footer;
