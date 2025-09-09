"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactoForm from "@/components/molecules/ContactoForm";
import Navbar from "@/components/molecules/Navbar";
import DiagonalSection from "../../components/layouts/DiagonalSection";
import Footer from "../../components/molecules/Footer";
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
        background="#363636"
        inverter={false}
        size="XXL"
      >
        <Box data-aos="fade-right" sx={{display: 'flex', justifyContent: 'center'}}>
          <PersonalInfo
            image="/pexels-kindelmedia-9875408.jpg"
            name="Agustin Cardozo"
            title="Hola Mundo"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At laboriosam debitis rerum pariatur non maiores, fugit, alias, quo soluta placeat quae repellat tenetur repudiandae possimus quas animi? Dicta sed laudantium quisquam ut similique ullam sequi ratione possimus, ad quos sint impedit magni blanditiis culpa dolore ex corporis quo autem porro, nemo ducimus numquam eligendi delectus illum. Et molestiae eius nisi eveniet dolorem quidem soluta tempore, pariatur minima porro ratione quae mollitia"
            inverter={false}
          />
        </Box>

        <Box data-aos="zoom-in" data-aos-delay="200">
          <Divider color="#fbbf24" variant="middle" />
        </Box>

        <Box data-aos="fade-left" data-aos-delay="400" sx={{display: 'flex', justifyContent: 'center'}}>
          <PersonalInfo
            image="/pexels-kindelmedia-9875408.jpg"
            name="Agustin Cardozo"
            title="Hola Mundo"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. At laboriosam debitis rerum pariatur non maiores, fugit, alias, quo soluta placeat quae repellat tenetur repudiandae possimus quas animi? Dicta sed laudantium quisquam ut similique ullam sequi ratione possimus, ad quos sint impedit magni blanditiis culpa dolore ex corporis quo autem porro, nemo ducimus numquam eligendi delectehenderit, exercitationem temporibus beatae iusto natus unde veritatis. Soluta aliquam adipisci eaque!"
            inverter
          />
        </Box>
      </DiagonalSection>
      <Footer background="#fbbf24" />
    </>
  );
};

export default AboutUsPage;
