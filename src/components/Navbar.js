import React,{ useState,useEffect } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import {motion} from 'framer-motion'

const Navbar = ({toggle}) => {
    const [shouldShowActions,setShouldShowActions]= useState(true)
    const [lastYPos, setLastYPos] = useState(0);
    useEffect(() => {

        function handleScroll() {
            const yPos = window.scrollY;
            const isScrolling = yPos === 0;
            setShouldShowActions(isScrolling)
            setLastYPos(yPos)
        }
        window.addEventListener('scroll', handleScroll,false)


        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }

    }, [lastYPos])
    return (
        <Nav as={motion.div} animate={{backgroundColor: shouldShowActions ? 'transparent':'#cd853f'}} >

                <Logo to='/'>DARCO</Logo>
                <MenuBars onClick={toggle}/>
                <NavMenu>

                    <NavLink to='/'>About</NavLink>
                    <NavLink to='/homes'>Homes</NavLink>
                    <NavLink to='/rentals'>Rentals</NavLink>
                </NavMenu>      
                <NavBtn>
                    <Button to='/contact'>Contact Us</Button>
                </NavBtn>          
        </Nav>
    )
}
const NavLink  = styled(Link)`
    color:#fff;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    height:100%;
    cursor: pointer;
    text-decoration:none;
    
`

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 0rem ;
    z-index: 100;
    position: fixed;
    width: 100%;
`

const Logo = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0rem 1rem;
    height:100%;
    cursor: pointer;
    text-decoration:none;
    font-style: italic;

`

const MenuBars = styled(FaBars) `
    display: none;
    
    @media screen and (max-width: 768px){
        display: block;
        height:40px;
        width:40px;
        cursor:pointer;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-50%, 25%);
        color:#fff;
    }

`
const NavMenu = styled.div`
    display: flex;
    margin: 0 auto;
    @media screen and (max-width: 768px){
        display: none;
    }
`
const NavBtn = styled.div`
    display:flex;
    align-items: center;
    padding: 0rem 1rem;
`
const Button = styled(motion.button)`
    height: 40px;
    width:120px;
    color: white;
    border-style:none;
    background-color: #cd853f;
    color:white;
    @media screen and (max-width: 768px){
        display: none;
    }
`



export default Navbar
