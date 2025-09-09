import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

type DiagonalSectionInfo = {
  topColor: string;
  bottomColor: string;
  background?: string;
  backgroundImage?: string; // nueva prop
  inverter?: boolean;
  size?: 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL';
};

const DiagonalSection: React.FC<DiagonalSectionInfo> = ({
  topColor,
  bottomColor,
  background = '#fff',
  backgroundImage,
  inverter = false,
  size = 'L',
  children
}) => {

  const heightMap: Record<'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL', string> = {
    S: '50vh',
    M: '75vh',
    L: '100vh',
    XL: '150vh',
    XXL: '200vh',
    XXXL: '250vh',
  };

  const sectionHeight = heightMap[size];

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: sectionHeight,
          backgroundColor: background,
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 2
        }}
      >
        {/* Franjas diagonales */}
        {inverter ? (
          <>
            <Box sx={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100px',
              backgroundColor: topColor,
              transform: 'skewY(3deg)',
              transformOrigin: 'top left',
            }} />
            <Box sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '100px',
              backgroundColor: bottomColor,
              transform: 'skewY(-3deg)',
              transformOrigin: 'bottom left',
            }} />
          </>
        ) : (
          <>
            <Box sx={{
              position: 'absolute',
              top: 0,
              width: '100%',
              height: '100px',
              backgroundColor: topColor,
              transform: 'skewY(-3deg)',
              transformOrigin: 'top left',
            }} />
            <Box sx={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              height: '100px',
              backgroundColor: bottomColor,
              transform: 'skewY(3deg)',
              transformOrigin: 'bottom left',
            }} />
          </>
        )}

        {/* Contenido centrado */}
        <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
          {children}
        </Box>
      </Box>
    </React.Fragment>
  );
};


export default DiagonalSection;
