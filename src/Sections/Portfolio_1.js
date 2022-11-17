import styled, {keyframes} from 'styled-components'
import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion"

import img1 from '../mainPics/wedding05.jpg'
import img3 from '../mainPics/wedding02.jpg'
import img4 from '../mainPics/wedding15.jpg'
import img5 from '../mainPics/wedding14.jpg'




const Section = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: block;
    margin: 0 auto;
    background-color: #F2F2F0;
`

const Top = styled.div`
    display: flex;
    width: 100%;
    height: 8vh;
    margin: 0 auto;
    border: white solid 1px;
    letter-spacing: 2px;

    background-color: #696E68;
    opacity: 0.4;
    align-items: center;
    justify-content:center;

    @media (max-width:600px) {
        height: 6vh;
    }
    
        h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        text-align: center;
        font-family: 'Commissioner', sans-serif;
        font-weight: 100;
        color: #D7D9D8;
        text-shadow: 2px 2px 4px #BFB6AE ;
        opacity: 0.8;
        

        @media (max-width:600px) {
            font-size: 1.5rem;
        }
        }

`

const Body = styled.div`
height: 92vh;
background-color: #F2F2F0;
display: flex;
`
const MainPic = styled.div`
    width: 70%;
    position: absolute;
    left: 0;
    display: flex;

    @media (max-width:600px) {
        opacity: 0.9;
    }
    
        img{
            width: 80%;
            position: absolute;
            top: 0;
            left: 0;
            box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
            @media (max-width:600px) {
                width: 100vw;
            }
        }
`
const Text = styled.div`

    z-index: 10;
    width: 40%;
    position: absolute;
    top: 0%;
    right: 1%;
    padding: 10px;
    
    @media (max-width:600px) {
        z-index: 10;
        width: 40%;
        position: absolute;
        top: 0;
        left: 0;
        }

    p{ 
        color: rgba(81, 82, 84);
        font-size: 5rem;
        font-weight: 200;
        background: none;
        font-family: 'Commissioner', sans-serif;
        text-align: left;
        width: 40%;
        height: 20rem;
        padding: 20px;
        text-shadow: 2px 2px 2px white;
        line-height: 5rem;

        @media (max-width:600px) {
        font-size: 3.5rem;
        font-weight: 100;
        line-height: 4rem;
        text-shadow: 2px 2px 4px #BFB6AE ;
        }   
    }
`
const MiddlePic = styled.div`

    height: 30%;
    position: absolute;
    bottom: 20px;
    right: 0;
    display: flex;
    justify-content: space-between;
    opacity: 0.9;
    padding: 0;

    

    @media (max-width:600px) {
        width: 100%;
        height: 20%;
        position: absolute;
        bottom: 10px;
        left: 0;
        display: flex;
        justify-content: space-around;
        opacity: 0.9;

        }
    
        img{
            width: 40%;
            padding: 0px;   
            box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;
            margin-left: 16px;

            @media (max-width:600px) {
            width: 29%;
            object-fit: cover;
            }
        
        }

`


function Portfolio_1() {

  
    useEffect(() => {
    
        Aos.init();
    }, []);



    return (

        <Section id='portfolio_1'>
          
            <Top>
                <h1 data-aos="fade-down"
                data-aos-offset="100"
                data-aos-delay="2"
                data-aos-duration="1000"
                >Portfolio</h1>
            </Top>

            <Body>
                <MainPic>
                <img data-aos="fade-right"
                data-aos-anchor-placement="top-center"
                data-aos-offset="100"
                data-aos-delay="2"
                data-aos-duration="2000"
                src={img1} className='img1' alt='pic'/>
                </MainPic>

                <MiddlePic>
                    <img data-aos="fade-right"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-sine"
                    src={img3} alt='pic'/>


                    <img className="middleOne"
                    data-aos="flip-left"
                    data-aos-delay="1"
                    data-aos-duration="3000"
                    src={img5} alt='pic'/>

                    <img data-aos="flip-up"
                    src={img4} alt='pic'/>
                </MiddlePic>
            </Body>

            <Text data-aos="zoom-in-up"
                data-aos-anchor-placement="top"
                data-aos-offset="150"
                data-aos-delay="5"
                data-aos-duration="3000">
                <p>Love<br>
                </br>is<br>
        
                </br>Flower<br>
                </br>Like
                </p>
            </Text>

  
        </Section>

    )
}

export default Portfolio_1