import React from 'react'
//Info section
import Hero from '../components/Hero.js'
//data
import { SliderData } from '../data/SliderData';
//footer
import Footer from  '../components/Footer'
const Rentals = () => {
    return (
        <>
            <Hero slides={SliderData}/>
            <Footer/>
        </>
    )
}

export default Rentals
