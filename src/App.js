import react from 'react'
import {Switch,Route} from 'react-router-dom'
import { SliderData } from './data/SliderData';
//Pages
import AboutUs from './pages/AboutUs';
import Homes from './pages/Homes'
import Rentals from './pages/Rentals'
//Global style 
import GlobalStyle from './globalStyles';
import Dropdown from './components/Dropdown';
import { useState } from 'react/cjs/react.development';
//Info section
import Navbar from './components/Navbar';
import Hero from './components/Hero.js'
import InfoSection from './components/InfoSection';
import InfoSectionTwo from './components/InfoSectionTwo';
import InfoSectionThree from './components/InfoSectionThree'
import InfoSectionFour from './components/InfoSectionFour'
import { InfoData, InfoDataTwo, InfoDataThree } from './data/InfoData';
//footer
import Footer from  './components/Footer'



function App() {
  const [isOpen,setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <GlobalStyle/>
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>     
        <Switch>
          <Route path='/' exact>
              <AboutUs/>
          </Route>
          <Route path='/homes' >
              <Homes {...InfoDataThree}/>
          </Route>
          <Route path='/rentals'>
              <Rentals slides={SliderData}/>
          </Route>        
        </Switch> 
 
    </>
  );
}

export default App;
