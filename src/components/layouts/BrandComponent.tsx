import { Box, Container } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import Navbar from '../molecules/Navbar';
import Footer from '../molecules/Footer';
import DiagonalSection from './DiagonalSection';

type BrandLayoutProps = {
    title: string
    imgProduct: string
    descriptionProduct: string
    imgExample?: string
    descriptionFunctionality?: string
    caracteristicas?: string
}

export const BrandComponent: React.FC<BrandLayoutProps> = ({ title, imgProduct, descriptionProduct, imgExample, descriptionFunctionality, caracteristicas }) => {
    return (
        <>
            <Navbar />
            <DiagonalSection
                topColor="#fbbf24"
                bottomColor="#fbbf24"
                background="#fff"
                inverter={false}
                size="XXL"
            >
                <Container sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'column', gap: 5 }}>
                    
                    {/* Título */}
                    <Typography variant='h3' fontWeight={500}>{title}</Typography>
                    
                    {/* Imagen principal */}
                    <Box
                        sx={{
                            width: '100%',           // ocupa todo el ancho
                            height: 500,             // altura fija
                            borderRadius: 2,
                            backgroundImage: `url(${imgProduct})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></Box>
                    
                    {/* Descripción */}
                    <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                        {descriptionProduct}
                    </Typography>
                    
                    {/* Imagen ejemplo */}
                    {imgExample && (
                        <Box
                            sx={{
                                width: '100%',
                                height: 500,
                                borderRadius: 2,
                                backgroundImage: `url(${imgExample})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></Box>
                    )}
                    
                    {/* Funcionalidad */}
                    {descriptionFunctionality && (
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
                            {descriptionFunctionality}
                        </Typography>
                    )}
                </Container>
            </DiagonalSection>
            <Footer background='#fbbf24' />
        </>
    )
}

export default BrandComponent
