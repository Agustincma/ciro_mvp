'use client'
import { Box, Button, Container } from '@mui/material'
import React from 'react'
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/navigation';

type SolutionProps = {
    image?: string,
    brand?: string,
    title: string,
    description: string;
    path?: string | any
}

export const SolutionComponent: React.FC<SolutionProps> = ({ image, brand, title, description, path }) => {
    const router = useRouter()

    return (
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 4,}}>
            <Container sx={{ width: '400px' }}>
                <Box
                    sx={{
                        width:300,
                        height:300,
                        borderRadius: 2,
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: "#fff",
                        p: 3,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                ></Box>
            </Container>
            <Container sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Typography variant='subtitle1'>{brand}</Typography>
                <Typography variant='h4'>{title}</Typography>
                <Typography variant='body1'>{description}</Typography>
                <Button sx={{
                    backgroundColor: '#fbbf24',
                    color: '#000',
                    borderRadius: 2
                }} onClick={() => router.push(path)} >Ver mas sobre {brand}</Button>

            </Container>
        </Container>
    )
}
export default SolutionComponent