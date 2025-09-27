import React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Box, Container, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

type PersonalInfoProps = {
  image: string;
  name: string;
  title: string;
  description: string;
  linkedIn: string;
  colorText?: string;
  inverter?: boolean;
  href?: string;
};

export const PersonalInfo: React.FC<PersonalInfoProps> = ({
  image,
  name,
  title,
  description,
  linkedIn,
  colorText = "#000",
  inverter = false,
  href = ''
}) => {

  const imageBlock = (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        component="img"
        src={image}
        alt={name}
        sx={{
          width: 400,
          height: 400,
          borderRadius: '50%',
          objectFit: 'cover',
          mb: 1,
          border: '2px solid #fbbf24',
        }}
      />
      <Typography variant="h5" color={colorText} sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        {name}
      </Typography>
    </Box>
  );

  const infoBlock = (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
      <Typography variant="h3" color={colorText} fontWeight="bold" sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography variant="h6" color={colorText} sx={{ mb: 2 }}>
        {description}
      </Typography>
      <Box sx={{ alignSelf: 'center' }}>
        <IconButton
          href={linkedIn}
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          sx={{ color: '#0e76a8' }}
        >
          <Link rel="perfil" href={href} children={

            <LinkedInIcon fontSize="large" />
          } />

        </IconButton>
      </Box>
    </Box>
  );

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        margin: 10
      }}
    >
      {inverter ? (
        <>
          {infoBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {infoBlock}
        </>
      )}
    </Container>
  );
};

export default PersonalInfo;
