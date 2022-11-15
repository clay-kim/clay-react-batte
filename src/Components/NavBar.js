import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { motion } from "framer-motion"
import { Squeeze as Hamburger } from 'hamburger-react'
import logo from '../assets/logo.png'


const NavContainer = styled(motion.div)`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
    position: absolute;
    z-index: 20;
`
const NavbarInnerContainer = styled.div`
    display: flex;
    width: 100%;
`

const MenuItemsContainer = styled(motion.ul)`
    position: relative;
    list-style: none;
    display: flex;
    align-items: center;
    width: 100%;

    padding: 0 10rem;
    @media (max-width:600px) {
        flex-direction: column;
        padding: 2rem 0;
        height: max-content;
       
    }
`

const MenuItem = styled(motion.li)`
    text-transform: uppercase;
    font-family: 'Commissioner', sans-serif;
    font-weight: 100;
    font-size: 16px;
    padding: 0 10px;
    color: #F3FFF1;

    margin-left: 60px;
    cursor: pointer;
    
    @media (max-width:700px) {
        display: none;
    }
`
const MenuItem2 = styled(motion.li)`
    text-transform: uppercase;
    font-family: 'Poiret One', cursive;
    font-size: 22px;
    padding: 15px 10px;
    color: white;
    list-style: none;
    cursor: pointer;
`


const LeftContainer = styled.div`
    width: 30%;
    display: flex;

    p{
        font-size: 33px;
        color: white;
        padding: 10px;
        margin-left: -50px;
        font-family: 'Poiret One', cursive;;
    }

    @media (max-width: 700px) { 
        p {
            margin-left: -90px;
        }
}

`
const RightContainer = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    right: 5%;

`

const NavBarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 3rem;
   
    
    height: auto;   
    width:80%;
    position: absolute;
    top: 100%;
 
    @media (min-width: 700px){
        display: none;
    }

`

const HamburgerButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
border: 0;
background: none;
margin-right: 20px;

@media (min-width: 700px) {
    display: none;
    
}

`


function NavBar() {


    const handleScroll = (id) => {
        let element = document.querySelector(id);
        element.scrollIntoView({behavior: "smooth"});
        console.log("CHeck@@!!", element.id);       
    
    }

   const [isOpen, setOpen] = useState(false);

   console.log("State: ", isOpen);
  return (

    <NavContainer initial={{
        y: '-100%'
    }}
    animate={{
        y: '0'
    }}
    transition={{
        duration: 6, delay: 3
    }}>
        <NavbarInnerContainer>
            <MenuItemsContainer>
                <LeftContainer>
                    <p>Batté</p>
                </LeftContainer>
                
                    <RightContainer>
                        <MenuItem
                        onClick={() => handleScroll('#home')}
                        whileHover={{scale:1.1, y:-5}}
                        whileTap={{scale:0.9, y:0}}
                        >Home</MenuItem>
                        <MenuItem
                        onClick={() => handleScroll('#about')}
                        whileHover={{scale:1.1, y:-5}}
                        whileTap={{scale:0.9, y:0}}
                        >About</MenuItem>
                        <MenuItem
                        onClick={() => handleScroll('#portfolio_1')}
                        whileHover={{scale:1.1, y:-5}}
                        whileTap={{scale:0.9, y:0}}
                        >Portfolio</MenuItem>
                        <MenuItem
                        onClick={() => handleScroll('#contact')}
                        whileHover={{scale:1.1, y:-5}}
                        whileTap={{scale:0.9, y:0}}
                        >Contact</MenuItem>
                    </RightContainer>
            </MenuItemsContainer>
        </NavbarInnerContainer>
            <HamburgerButton>
                <Hamburger
                hideOutline={false}
                color="white"
                toggled={isOpen} toggle={setOpen} />
            </HamburgerButton>
        {isOpen && 
            <NavBarExtendedContainer onClick={() => setOpen(false)}>
                <MenuItem2
                onClick={() => handleScroll('#home')}
                whileHover={{scale:1.1, y:-5, color:'#EBE984'}}
                whileTap={{scale:0.9, y:0}}
                >Home</MenuItem2>
                <MenuItem2
                onClick={() => handleScroll('#about')}
                whileHover={{scale:1.1, y:-5, color:'#EBE984'}}
                whileTap={{scale:0.9, y:0}}
                >About</MenuItem2>
                <MenuItem2
                onClick={() => handleScroll('#portfolio_1')}
                whileHover={{scale:1.1, y:-5, color:'#EBE984'}}
                whileTap={{scale:0.9, y:0}}
                >Portfolio</MenuItem2>
                <MenuItem2
                onClick={() => handleScroll('#contact')}
                whileHover={{scale:1.1, y:-5, color:'#EBE984'}}
                whileTap={{scale:0.9, y:0}}
                >Contact</MenuItem2>
            </NavBarExtendedContainer>
        }
    </NavContainer>
 
  )
}

export default NavBar