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
    min-height: 100vh;
    width: 100vw;
    display: block;
    
    margin: 0 auto;
`

const Top = styled.div`
    width: 100%;
    height: 10vh;
    margin: 0 auto;
    border: white solid 1px;
    background-color: #585844;
    opacity: 0.9;
    
        h1 {
        font-size: 2rem;
        text-align: center;
        font-family: 'Abel', sans-serif;
        color: #FFFCF0;
        text-shadow: 2px 2px 2px #A6A8B8;
        }
`

const Body = styled.div`
height: 90vh;
background-color: beige;
display: flex;
justify-content: space-between;

`
const MainPic = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    
        img{
            width: 80%;
            position: absolute;
            top: 0;
            left: 0;
        }
`
const Text = styled.div`

    z-index: 10;
    width: 40%;
    position: absolute;
    top: 20%;
    right: 0;
    padding: 10px;

    p{ 
        color: rgba(81, 82, 84);
        font-size: 5rem;
        font-weight: 500;
        background: none;
        font-family: 'Poiret One', cursive;
     
        text-align: center;
        width: 40%;
        height: 20rem;
        padding: 20px;
        text-shadow: 2px 2px 2px white;
        line-height: 5rem;
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
    
        img{
            width: 40%;
            padding: 10px;   
           
        }


`

const RightPic = styled.div`
    width: 40%;
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-top: 100px;

    
        img{
            width: auto;
            height: 75%;
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
                    data-aos-offset="-100"
                    data-aos-delay="2"
                    data-aos-duration="2000"
                    src={img5} alt='pic'/>


                    <img data-aos="flip-down"
                    data-aos-anchor-placement="top-center"
                    data-aos-offset="-100"
                    data-aos-delay="2"
                    data-aos-duration="2000"
                    src={img3} alt='pic'/>

                    <img data-aos="zoom-out-left"
                    data-aos-anchor-placement="top-center"
                    data-aos-offset="-100"
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
                data-aos-offset="100"
                data-aos-delay="3"
                data-aos-duration="3000">
                <p>Event<br></br>Wedding<br></br>Flower<br></br>Custom</p>
            </Text>

  
        </Section>

    )
}

export default Portfolio_1