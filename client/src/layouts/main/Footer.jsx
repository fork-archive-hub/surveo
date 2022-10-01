import { Paper, Container, Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container maxWidth="xl">
      <Paper sx={{ p: 1 }}>
        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', textAlign: 'center' }}>
          © Krawczyk Patryk {currentYear}. All Rights Reserved.
        </Typography>
      </Paper>
    </Container>
  );
};

export default Footer;
