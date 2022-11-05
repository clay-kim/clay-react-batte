import styled from 'styled-components'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"
import img from '../mainPics/wedding03.jpg'
import img01 from '../mainPics/ALaCarte01.jpg'
import img02 from '../mainPics/ALaCarte02.jpg'
import img03 from '../mainPics/ALaCarte03.jpg'
import img04 from '../mainPics/ALaCarte04.jpg'
import img05 from '../mainPics/ALaCarte05.jpg'
import img06 from '../mainPics/ALaCarte06.jpg'
import img07 from '../mainPics/ALaCarte07.jpg'
import img08 from '../mainPics/ALaCarte08.jpg'
import img09 from '../mainPics/ALaCarte09.jpg'
import img10 from '../mainPics/ALaCarte10.jpg'




const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    background-color: #FFFCF0;

    p{
        color: black;
        position:absolute;
        top: 40%;
        width:40%;
        left: 5%;
        
        @media (max-width:600px) {
            
        }

    }

    


.bigPic {
    height: 37vh;
    padding: 0;

    pointer-events: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    object-fit: fill;
    margin-top: 20px;
 
}
`


const MainTitle = styled.h1`
    width: 100%;
    font-size: 2.5rem;
    font-family: 'Abel', sans-serif;
    color: #2e2e27;
    font-weight: 300;
    text-shadow: 2px 2px 4px gray;
    position: relative;
    text-align: center;

    @media (max-width:600px) {
        width: 100%;
        font-size: 2rem;
        text-decoration: line-through 1px black;
        border-bottom:5px solid white;
   
    }
`

const Top = styled.div`
    width: 100%;
    height: 40vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width:600px) {
        width: 100%;
        
    }

`

const Title = styled.h1`
    width: 30%;
    font-size: 4rem;
    font-family: 'Abel', sans-serif;
    color: #2e2e27;
    font-weight: 300;
    text-shadow: 2px 2px 4px gray;
    position: relative;
    text-align: center;

    @media (max-width:600px) {
        width: 30%;
        font-size: 2rem;
    }
`


const Right = styled.div`
    width: 70%;
    height: 100%;
    position: relative;
    padding-left: 10%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width:600px) {
        width: 70%;
        
    }



    .carousel {
        cursor: grab;
        overflow: hidden;
        display: flex;
        width: 100%;
        position: absolute;
        top: 0%;
        left: 0%;
        z-index: 1;
    }
    .inner-carousel {
        display: inline-flex;
        margin-top: 80px;

        .item{ 
            min-width: 150px;
            backdrop-filter: blur(20px);
            padding: 0px 20px;
            pointer-events: none;

            @media (max-width:600px) {
            min-width: 120px;
            backdrop-filter: blur(20px);
            padding: 0px 12px;
            pointer-events: none;
            }
        }
        .item img {
            width: 100%;
            height: 100%;
            border-radius: 2rem;
            pointer-events: none;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            object-fit: cover;

            @media (max-width:600px) {
            width: 100%;
            height: 90%;
            object-fit: cover;
            }
        }
    }
`
const Middle = styled.h1`
    color: antiquewhite;
    background-color: gray;
    text-align: center;
    font-size: 25px;
 

    @media (max-width:600px) {
        font-size: 18px;
    }
`



function Portfolio_2() {

    useEffect(() => {
        AOS.init({
            offset: 200, // offset (in px) from the original trigger point
            easing: 'ease'
        });
        setWidth(slider_wrapper.current.scrollWidth-slider_wrapper.current.offsetWidth);
    }, []);

    //for Carousel
    const [width, setWidth] = useState(0);
    const slider_wrapper = useRef();

    const images = [
        img01, img02, img03, img04, img05, img06, img07, img08, img09, img10
    ];

    return (

        <Section id='portfolio_2'>
            <MainTitle data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-easing="ease-in-out-quad">
                Al La Carte is available
            </MainTitle>

        <Top >
            <Title data-aos="fade-down"
                data-aos-offset="100"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-quad">
                Event
            </Title>

            <Right>
                <motion.div className='carousel' ref={slider_wrapper} whileTap={{ cursor: "grabbing" }}
                    data-aos="fade-left"
                    data-aos-offset="100"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-quad">
                            <motion.div
                                drag="x"
                                dragConstraints={{ right: 0, left: -width }}
                                className='inner-carousel'>
                                {images.map((image) => {
                                    return (
                                        <motion.div className='item'>
                                            <img src={image} alt=""  />
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                </motion.div>
            </Right>
        </Top>

        <Middle data-aos="fade-up"
            data-aos-anchor-placement="top-bottom">
            <h4 data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            >Batte Studio Flower Service</h4>
          
        </Middle>

            <img className='bigPic' 
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-center"
            data-aos-offset="-400"
            data-aos-delay="0"
            data-aos-duration="2000"
           
            src={img} alt='pic'/>

        </Section>

    )
}

export default Portfolio_2