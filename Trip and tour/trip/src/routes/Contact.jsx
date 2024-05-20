import React from 'react'
import Hero from '../Components/Hero'
import AboutImg from "../assets/2.jpg"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import ContactForm from '../Components/ContactForm'

export default function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid "
        heroImg={AboutImg}
        title="Contact"
        url="/"
        btnClass="hide" />
        <ContactForm/>
      <Footer />
    </>
  )
}
