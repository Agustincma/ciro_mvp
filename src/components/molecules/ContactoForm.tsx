'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
  Paper,
} from '@mui/material';

interface FormData {
  nombre: string;
  apellido: string;
  correo: string;
  mensaje: string;
}

export default function ContactoForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    apellido: '',
    correo: '',
    mensaje: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí podrías enviar los datos a una API o servicio externo
  };

  return (
    <Paper elevation={3} sx={{ display: 'flex',flexDirection: 'column', alignItems: 'center', maxWidth: 600, mx: 'auto', p: 4, border: '2px solid #363636' }}>
      <Typography variant="h6" fontWeight={"bold"} gutterBottom>
        Contacto
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          Nombre (obligatorio)
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="Nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              required
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Correo electrónico (obligatorio)
          </Typography>
          <TextField
            label="Correo electrónico"
            name="correo"
            type="email"
            value={formData.correo}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
        </Box>

        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Mensaje (obligatorio)
          </Typography>
          <TextField
            label="Mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            fullWidth
            multiline
            rows={5}
            variant="outlined"
          />
        </Box>

        <Button
          type="submit"
          sx={{ mt: 4, color: '#fff', backgroundColor: '#000' }}
        >
          Enviar
        </Button>
      </Box>
    </Paper>
  );
}
