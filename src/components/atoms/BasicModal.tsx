'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const style = {
  position: 'absolute',
  width: '70%',
  height: '60vh',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#fbbf24',
  border: 'none',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  color: '#000',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4
};

const styleButton = {
  bgcolor: '#fff',
  color: '#000',
  borderRadius: 100,
  minWidth: 40,
  minHeight: 40,
  p: 1,
  '&:hover': {
    bgcolor: '#e5e5e5'
  }
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* Botón con ícono de flecha */}
      <Button sx={styleButton} onClick={handleOpen}>
        <ArrowForwardIcon />
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* Imagen a la izquierda */}
          <Box
            component="img"
            src="/pexels-kindelmedia-9875408.jpg"
            alt="work"
            sx={{
              width: '40%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: 3
              
            }}
          />

          {/* Texto a la derecha */}
          <Box sx={{ flex: 1 }}>
            <Typography id="modal-modal-title" variant="h4" fontWeight={600} gutterBottom>
              Project Title
            </Typography>
            <Typography id="modal-modal-description" sx={{ fontSize: 16, lineHeight: 1.6 }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Repudiandae eveniet facilis molestiae unde accusamus dolor id reprehenderit 
              excepturi, recusandae numquam iusto, ea tempore sapiente nemo dignissimos, 
              esse dicta facere quasi?
            </Typography>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
