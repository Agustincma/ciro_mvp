'use client';
import { Box, Typography, Link, Stack, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type FooterColor = {
  background: string;
}

export const Footer: React.FC<FooterColor> = ({background = "#363636"}) => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: {background}, // naranja vibrante
        color: 'white',
        py: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        Ciro
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="center" sx={{ mb: 2 }}>
        <Link href="/" underline="hover" color="inherit">
          Ciro
        </Link>
        <Link href="/contacto" underline="hover" color="inherit">
          Contacto
        </Link>
        <Link href="/about" underline="hover" color="inherit">
          About
        </Link>
      </Stack>

      <Typography variant="body2">correo@correo.com</Typography>
      <Typography variant="body2"> 11 2233-4455</Typography>

      <Box sx={{ mt: 2 }}>
        <IconButton
          href="https://www.linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          sx={{ color: 'white' }}
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer