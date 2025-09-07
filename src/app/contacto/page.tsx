"use client";

import ContactoForm from "@/components/molecules/ContactoForm";
import Navbar from "@/components/molecules/Navbar";
import DiagonalSection from '../../components/layouts/DiagonalSection';
import Footer from '../../components/molecules/Footer';

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <DiagonalSection
        topColor="#fbbf24"
        bottomColor="#fbbf24"
        background="#363636"
        inverter={false}
        size="L"
      >
        <ContactoForm />
      </DiagonalSection>
      <Footer
      background = '#fbbf24'
      />
    </>
  );
}
