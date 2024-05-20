import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Destination from '../Components/Destination'
import Trip from '../Components/Trip'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero
                cName="hero"
                heroImg="https://plus.unsplash.com/premium_photo-1664121799910-f4a993eb1098?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                title="Your Adventure Awaits Here"
                text="Choose Your Favourite Destination"
                buttonText="Travel Plan"
                url="/"
                btnClass="Show"

            />
            <Destination />
            <Trip/>
            <Footer/>
        </>
    )
}
