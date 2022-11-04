import styled from 'styled-components'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"
import img1 from '../mainPics/wedding03.jpg'
import img2 from '../mainPics/wedding10.jpg'
import img5 from '../mainPics/event03.jpg'
import img4 from '../mainPics/wedding10.jpg'
import img3 from '../mainPics/event03.jpg'
import img6 from '../mainPics/wedding10.jpg'



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
    }


.bigPic {
    width: 100%;
    padding: 0;

    pointer-events: none;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    object-fit: cover;
}
`
const Top = styled.div`
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
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

`



const Right = styled.div`
    width: 70%;
    height: 100%;
    position: relative;
    padding-left: 10%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    h1{
        width: 5rem;
        margin: 0 2rem;
    }

    .carousel {
        cursor: grab;
        overflow: hidden;
        display: flex;
        width: 100%;
        position: absolute;
        top: 5%;
        left: 0%;
        z-index: 1;
    }
    .inner-carousel {
        display: inline-flex;
        .item{ 
            min-width: 200px;
            backdrop-filter: blur(20px);
            padding: 30px 20px;
            
            pointer-events: none;
        }
        .item img {
            width: 100%;
            height: 100%;
            border-radius: 2rem;
            pointer-events: none;
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            object-fit: cover;
        }
    }
`
const Middle = styled.h1`
    color: antiquewhite;
    background-color: gray;
    text-align: center;
    font-size: 28px;
    
`



function Portfolio_2() {

    useEffect(() => {
        AOS.init({
            offset: 100, // offset (in px) from the original trigger point
            easing: 'ease'
        });
        setWidth(slider_wrapper.current.scrollWidth-slider_wrapper.current.offsetWidth);
    }, []);

    //for Carousel
    const [width, setWidth] = useState(0);
    const slider_wrapper = useRef();

    const images = [
        img1, img2, img3, img4, img5, img6
    ];

    return (

        <Section id='portfolio_2'>
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

        <Middle>
            <h4>Batte Studio Flower Service</h4>
          
        </Middle>
            <img className='bigPic' 
            data-aos="zoom-out"
            data-aos-offset="200"
            data-aos-delay="1000"
            data-aos-duration="1000"
            src={img1} alt='pic'/>

        </Section>

    )
}

export default Portfolio_2