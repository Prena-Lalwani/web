import React from 'react'
import Hero from '../Components/Hero'
import AboutImg from "../assets/night.jpg"
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'

export default function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid "
        heroImg={AboutImg}
        title="Service"
        url="/"
        btnClass="hide" />
        <Trip/>
      <Footer />
    </>
  )

}
