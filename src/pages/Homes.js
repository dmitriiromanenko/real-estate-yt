import React from 'react'
import styled from 'styled-components'
//Info section
import InfoSectionThree from '../components/InfoSectionThree'
//data
import { InfoDataThree } from '../data/InfoData';
//footer
import Footer from  '../components/Footer'

const Homes = () => {
    return (
        <Main>
            <InfoSectionThree {...InfoDataThree}/>
            <Footer/>
        </Main>
    )
}

const Main = styled.div`
    background-color: black;
`

export default Homes
