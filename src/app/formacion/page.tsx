import React from 'react'
import BasicModal from '../../components/atoms/BasicModal'
import Typography from '@mui/material/Typography';
import Navbar from '../../components/molecules/Navbar';
import Footer from '../../components/molecules/Footer';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DiagonalSection from '@/components/layouts/DiagonalSection';

export const FormationPage = () => {
  return (
    <>
      <Navbar />
      <DiagonalSection
        topColor="#fbbf24"
        bottomColor="#fbbf24"
        background="#363636"
        inverter={false}
        size="XL"
      >
        <Typography variant='h2' color='#fff' fontWeight={600} align="center" gutterBottom>
          Our Work
        </Typography>

        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box
                sx={{
                  position: 'relative',
                  width: 400,
                  height: 350,
                  borderRadius: 2,
                  overflow: 'hidden',
                  boxShadow: 3,
                  cursor: 'pointer',
                }}
              >
                <Box
                  component="img"
                  src="/pexels-kindelmedia-9875408.jpg"
                  alt={`work-${index}`}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                {/* Botón del modal en esquina inferior derecha */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 8,
                    right: 8,
                  }}
                >
                  <BasicModal />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </DiagonalSection>
      <Footer background='#fbbf24' />
    </>
  )
}
export default FormationPage
