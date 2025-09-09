'use client'
import Navbar from "../components/molecules/Navbar";
import DiagonalSection from '../components/layouts/DiagonalSection';
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import { Typography, Box } from '@mui/material';
import CardInfo from '../components/molecules/CardInfo';
import ContactoForm from "@/components/molecules/ContactoForm";
import Footer from "@/components/molecules/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // estilos de AOS

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Navbar />

      <DiagonalSection
        topColor="#fbbf24"
        bottomColor="#fbbf24"
        background="#363636"
        backgroundImage="/pexels-kindelmedia-9875408.jpg"
        inverter={false}
        size="L"
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            gap: 3,
          }}
        >
          <Typography variant="h2" color="#fff" textAlign="center" data-aos="fade-up">
            Lorem ipsum dolor sit amet.
          </Typography>
          <Typography variant="h5" color="#fff" textAlign="center" data-aos="fade-up" data-aos-delay="200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cum voluptatum corrupti illum laudantium fugiat! Quaerat non natus accusamus illum.
          </Typography>
          <Button variant="contained" sx={{ width: 150, backgroundColor: "#fff", color: "#000" }} data-aos="fade-up" data-aos-delay="400">
            Contacto
          </Button>
        </Container>
      </DiagonalSection>

      <DiagonalSection topColor="#fbbf24" bottomColor="#363636" background="#fbbf24" inverter={false} size="L">
        <Container sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', gap: 3 }}>
          <Typography variant="h3" color="#fff" textAlign="center" data-aos="fade-right">
            Lorem ipsum dolor sit, maxime fugit autem. Voluptatem, qui.
          </Typography>
          <Typography variant="h5" color="#fff" textAlign="center" data-aos="fade-left" data-aos-delay="200">
            Lorem ipsum dolor sitcing elit. Explicabo aliquam sed vel in perferendis possimus, maxime fugit autem. Voluptatem, qui.
          </Typography>
        </Container>
      </DiagonalSection>

      <DiagonalSection topColor="#363636" bottomColor="#363636" background="#363636" inverter={false} size="L">
        <Typography variant="h3" color="#fff" textAlign="center" data-aos="fade-right">
          Title
        </Typography>
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', gap: 5 }}>

          <Box data-aos="fade-up">
            <CardInfo
              image="/pexels-kindelmedia-9875408.jpg"
              title="Title 1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              showButton={true}
              buttonPath="/contacto"
              buttonText="Ir"
              category="Mecanica"
            />
          </Box>
          <Box data-aos="fade-up" data-aos-delay="200">
            <CardInfo
              image="/pexels-kindelmedia-9875408.jpg"
              title="Title 2"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              showButton={true}
              buttonPath="/contacto"
              buttonText="Ir"
              category="Electrical"
            />
          </Box>
          <Box data-aos="fade-up" data-aos-delay="400">
            <CardInfo
              image="/pexels-kindelmedia-9875408.jpg"
              title="Title 3"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              showButton={true}
              buttonPath="/contacto"
              buttonText="Ir"
              category="Herreria"
              chips={['TENDIDO DE CABLES', "INSTALACIONES", "CAMARAS"]}
            />

          </Box>
        </Container>
      </DiagonalSection>

      <DiagonalSection topColor="#363636" bottomColor="#363636" background="#fbbf24" inverter={false} size="XL">
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
          <Box data-aos="fade-up">
            <ContactoForm />
          </Box>
        </Container>
      </DiagonalSection>

      <Footer
        background="#363636"
      />
    </>
  );
}
