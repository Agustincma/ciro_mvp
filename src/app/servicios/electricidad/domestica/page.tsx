import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';

export const Electricidad = () => {
  const pasos = [
    {
      title: 'Cotización sin costo',
      description: 'Realizamos un presupuesto detallado sin costo, evaluando tus necesidades y puntos eléctricos.',
      image: '/pexels-kindelmedia-9875408.jpg'
    },
    {
      title: 'Cálculo de consumo',
      description: 'Analizamos cuántos electrodomésticos se conectarán para determinar el consumo total.',
      image: '/pexels-kindelmedia-9875408.jpg'
    },
    {
      title: 'Selección de cables',
      description: 'Elegimos el diámetro adecuado de los cables: 3,5 mm², 2,5 mm², según consumo y cantidad de puntos.',
      image: '/pexels-kindelmedia-9875408.jpg'
    },
    {
      title: 'Instalación de cableado',
      description: 'Colocamos los cables correctamente según la planificación, asegurando seguridad y eficiencia.',
      image: '/pexels-kindelmedia-9875408.jpg'
    },
    {
      title: 'Conexión de puntos eléctricos',
      description: 'Instalamos enchufes, interruptores y lámparas siguiendo normas de seguridad.',
      image: '/pexels-kindelmedia-9875408.jpg'
    },
    {
      title: 'Prueba y verificación',
      description: 'Comprobamos que todo funcione correctamente y realizamos pruebas de seguridad.',
      image: '/pexels-kindelmedia-9875408.jpg'
    }
  ];

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Nuestro Método de Trabajo
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom sx={{ mb: 6 }}>
        Cotización sin costo y explicación paso a paso de la instalación eléctrica doméstica
      </Typography>

      <Grid container spacing={6}>
        {pasos.map((paso, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ borderRadius: 3, boxShadow: 5, overflow: 'hidden', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <Box
                component="img"
                src={paso.image}
                alt={paso.title}
                sx={{ width: '100%', height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {paso.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {paso.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Electricidad;
