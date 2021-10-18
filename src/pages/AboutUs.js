import react from 'react'
//Info section
import Hero from '../components/Hero.js'
import InfoSection from '../components/InfoSection';
import InfoSectionTwo from '../components/InfoSectionTwo';
import InfoSectionThree from '../components/InfoSectionThree'
import InfoSectionFour from '../components/InfoSectionFour'
//data
import { InfoData, InfoDataTwo, InfoDataThree } from '../data/InfoData';
import { SliderData } from '../data/SliderData';
//footer
import Footer from  '../components/Footer'



function AboutUs() {

  return (
    <>
      <Hero slides={SliderData}/>
      <InfoSection {...InfoData}/>
      <InfoSectionTwo {...InfoDataTwo}/>
      <InfoSectionThree {...InfoDataThree}/>
      <InfoSectionFour {...InfoDataThree}/>
      <Footer/>
    </>  
  )
}

export default AboutUs
