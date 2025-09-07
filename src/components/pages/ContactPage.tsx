import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../molecules/Navbar';
import ContactoForm from '../molecules/ContactoForm';

export const ContactPage = () => {
  return (
    <Container>
        <Navbar/>
        <ContactoForm/>
    </Container>
  )
}

export default ContactPage