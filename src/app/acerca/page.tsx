"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactoForm from "@/components/molecules/ContactoForm";
import Navbar from "@/components/molecules/Navbar";
import DiagonalSection from "@/components/layouts/DiagonalSection";
import Footer from "@/components/molecules/Footer";
import PersonalInfo from "@/components/molecules/PersonalInfo";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";

export const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

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
        <Box data-aos="fade-right" sx={{display: 'flex', justifyContent: 'center'}}>
          <PersonalInfo
            image="/Jose.jpeg"
            name="Jose Manuel Velasquez Licet"
            title="Ingeniero en Instrumentación"
            href="https://www.linkedin.com/in/jose-manuel-velasquez-licet-063653182/"
            description="En Smurfit Westrock, he liderado la optimización y automatización de procesos eléctricos, aplicando mis competencias en programación de PLC y sistemas SCADA. Mi enfoque se centra en la gestión eficaz de fallas y en la implementación de estrategias de mantenimiento preventivo, lo que ha contribuido a minimizar tiempos de inactividad y a fortalecer la confiabilidad de los equipos."
          />
        </Box>

        <Box data-aos="zoom-in" data-aos-delay="200">
          <Divider color="red" variant="middle" />
        </Box>

        <Box data-aos="fade-left" data-aos-delay="400" sx={{display: 'flex', justifyContent: 'center'}}>
          <PersonalInfo
            image="/mi perfil.jpeg"
            name="Agustin Cardozo"
            title="Desarrollador de Software"
            href="https://www.linkedin.com/in/agustin-m-cardozo-7517131bb/"
            description="Apasionado por la tecnología y el desarrollo de software, he trabajado en diversos proyectos enfocados en la innovación y la eficiencia de procesos. Mi experiencia abarca desde el diseño de interfaces hasta la implementación de soluciones escalables, siempre buscando aportar valor y creatividad en cada desafío."
            inverter={true}
          />
        </Box>
      </DiagonalSection>
      <Footer background="#fbbf24" />
    </>
  );
};

export default AboutUsPage;
