import { Paper, Container, Typography } from '@mui/material';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container maxWidth="xl">
      <Paper sx={{ p: 2 }}>
        <Typography variant="caption" sx={{ display: 'block', color: 'text.secondary', textAlign: 'center' }}>
          © Krawczyk Patryk {currentYear}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Footer;
