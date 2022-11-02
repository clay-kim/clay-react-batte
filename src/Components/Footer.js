import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion"
import logo from '../assets/logo.png'
import { useLocomotiveScroll } from 'react-locomotive-scroll'



const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;
    background-color: rgba(176, 158, 165, 0.5);
`
const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    img{
        width: 10vh;
        height: auto;
        padding: 2rem 0;

        @media (max-width: 600px){
            padding: 0;
        }
    }
    h3{
        font-size: 50px;
        color: rgba(125, 133, 111, 1);

        @media (max-width: 600px){
            font-size: 1.5rem;
        }
    }
`

const ListBox = styled.ul`
     
        list-style-type: style none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin: 2rem;
        margin-top: 4rem;
        border-top: 1px solid rgba(29, 31, 28, 1);;
        border-bottom: 1px solid rgba(29, 31, 28, 1);;

        @media (max-width: 700px){
        
            display: flex;
            flex-direction: column;
            justify-content: center;
            border-top: 1px solid rgba(29, 31, 28, 1);;
            border-bottom: 1px solid rgba(29, 31, 28, 1);;

        }
`

const List = styled.li`
        font-family: monospace;
        padding: 2rem;
        font-size: 1.3rem;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 0.3s ease;
        color: rgba(29, 31, 28, 1);
        list-style: none;

        &:hover{
            transform: scale(1.1);
            color: rgba(43, 92, 67, 0.9);
        }


        @media (max-width: 700px){
            padding: 1rem;
            width: 100%;
            margin-left: -40px;
            text-align: center;

        }
`


const FooterComponent = styled(motion.footer)`
    width: 80vw;
    margin-top: 2rem;
    justify-content: center;

    
`


function Footer() {

    const handleScroll = (id) => {
        let element = document.querySelector(id);
            element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    }

  return (
        <Section id='contact' data-scroll-section>
            <LogoContainer>
                <img
                data-scroll data-scroll-speed="2" 
                src={logo} alt="/"/>
                <h3 data-scroll data-scroll-speed="-1" >Studio Batte</h3>
            </LogoContainer>

            <FooterComponent
            initial={{y: "-350px"}}
            whileInView={{y:0}}
            viewport={{once:false}}
            transition={{
                duration:1.5
            }}
            >
                <ListBox>
                    <List onClick={()=> handleScroll('#home')}>Home</List>
                    <List onClick={()=> handleScroll('#about')}>About</List>
                    <List onClick={()=> handleScroll('#portfolio_1')}>Portfolio</List>
                    <List onClick={()=> handleScroll('#contact')}>Contact</List>
                                
                </ListBox>
            
            </FooterComponent>
            
        
        
        </Section>
  )
}

export default Footer