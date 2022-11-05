import styled, {keyframes} from 'styled-components'
import React from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';
import { motion } from "framer-motion"

import img1 from '../mainPics/wedding11.jpg'
import img2 from '../mainPics/wedding08.jpg'
import img3 from '../mainPics/wedding02.jpg'
import img4 from '../mainPics/wedding07.jpg'
import img5 from '../mainPics/wedding09.jpg'




const Section = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: block;
    margin: 0 auto;
`

const Top = styled.div`
    display: flex;
    width: 100%;
    height: 10vh;
    margin: 0 auto;
    border: white solid 1px;
    background-color: #585844;
    opacity: 0.7;
    align-items: center;
    justify-content:center;

    @media (max-width:600px) {
        height: 6vh;
    }
    
        h1 {
        font-size: 2.5rem;
        text-transform: uppercase;
        text-align: center;
        font-family: 'Abel', sans-serif;
        color: #FFFCF0;
        text-shadow: 2px 2px 2px black;

        @media (max-width:600px) {
            font-size: 1.5rem;
        }

        }

`

const Body = styled.div`
height: 100vh;
background-color: #F2F2F7;
display: flex;
justify-content: space-between;

`
const MainPic = styled.div`
    width: 100%;
    position: relative;
    display: flex;

    @media (max-width:600px) {
        opacity: 0.9;
    }
    
        img{
            width: 80%;
            position: absolute;
            top: 0;
            left: 0;

            @media (max-width:600px) {
                width: 100vw;
            }
        }
`
const Text = styled.div`

    z-index: 10;
    width: 40%;
    position: absolute;
    top: 15%;
    right: 2%;
    padding: 10px;
    
    @media (max-width:600px) {
        z-index: 10;
        width: 40%;
        position: absolute;
        top: 20%;
        left: 0%;
        }

    p{ 
        color: rgba(81, 82, 84);
        font-size: 5rem;
        font-weight: 500;
        background: none;
        font-family: 'Poiret One', cursive;
        text-align: left;
        width: 40%;
        height: 20rem;
        padding: 20px;
        text-shadow: 2px 2px 2px white;
        line-height: 5rem;

        @media (max-width:600px) {
        font-size: 3.5rem;
        font-weight: 500;
        margin-top: 100px;
        }   
    }
`
const MiddlePic = styled.div`
    height: 30%;
    position: absolute;
    bottom: 7%;
    left: 8%;
    display: flex;
    justify-content: space-around;
    opacity: 0.8;

    @media (max-width:600px) {
        width: 100%;
        height: 20%;
        position: absolute;
        bottom: 5%;
        left: 0;
        display: flex;
        justify-content: center;
        }
    
        img{
            width: 40%;
            padding: 10px;   
            @media (max-width:600px) {
            width: 30%;
            }
        
        }


`

const RightPic = styled.div`
    width: 40%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-top: 100px;

    @media (max-width:600px) {
        width: 100%;
        height: 90%;
        position: absolute;
        bottom: -5%;
        display: flex;
        justify-content: flex-end;
        
    }
    
        img{
            width: auto;
            height: 65%;
        
            @media (max-width:600px) {
            height: 55%;
            position: absolute;
            top: 10%;
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
                <h1 
                data-aos="fade-down"
                data-aos-offset="100"
                data-aos-delay="30"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
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
                    <img data-aos="zoom-out-left"
                    data-aos-anchor-placement="top-center"
                    data-aos-offset="-200"
                    data-aos-delay="2"
                    data-aos-duration="2000"
                    src={img5} alt='pic'/>


                    <img data-aos="flip-down"
                    data-aos-anchor-placement="top-center"
                    data-aos-offset="-200"
                    data-aos-delay="3"
                    data-aos-duration="2000"
                    src={img3} alt='pic'/>

                    <img data-aos="zoom-out-left"
                    data-aos-anchor-placement="top-center"
                    data-aos-offset="-200"
                    data-aos-delay="2"
                    data-aos-duration="2000"
                    src={img4} alt='pic'/>
                </MiddlePic>

                <RightPic>
                    <img data-aos="zoom-out-right"
                    data-aos-anchor-placement="top-center"
                    data-aos-offset="100"
                    data-aos-delay="2"
                    data-aos-duration="2000"
                    src={img2} className='img3' alt='pic'/>
                </RightPic>
 
            </Body>



            <Text data-aos="zoom-in-down"
                data-aos-anchor-placement="top-bottom"
                data-aos-offset="150"
                data-aos-delay="5"
                data-aos-duration="3000">
                <p>Event<br></br>Wedding<br></br>Flower<br></br>Custom</p>
            </Text>

  
        </Section>

    )
}

export default Portfolio_1