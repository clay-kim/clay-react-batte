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
    background-color: #F2F2F0;

    p{
        color: black;
        position:absolute;
        top: 40%;
        width:40%;
        left: 5%;
        
        @media (max-width:600px) {
            
        }

    }

`

const MainTitle = styled.h1`
    width: 100%;
    font-size: 20px;
    font-family: 'Abel', sans-serif;
    color: #012326;
    position: relative;
    text-align: right;

    @media (max-width:600px) {
        width: 85%;
        font-size: 14px;
        line-height: 1.25rem;
        border-bottom: 1px solid #BEBDBF;
        padding-top: 20px;
   
    }
`


const Title = styled.h1`
    margin-left: 30px;
    width: 30%;
    text-align: right;
    height: 100px;
    font-size: 38px;
    justify-content: center;
    font-family: 'Abel', sans-serif;
    color: #012326;
    font-weight: 300;
    text-shadow: 2px 2px 4px gray;
    position: relative;
    
    @media (max-width:600px) {
        width: 30%;
        font-size: 28px;
    }
`

const Container = styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;

`
const Right = styled.div`
    width: 70%;
    height: 100%;
    position: relative;
    padding: 0 20px;


    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99;

    @media (max-width:600px) {
        width: 70%;
        
    }

    .carousel {
        cursor: grab;
        overflow: hidden;
        display: flex;
        justify-content: center;
        width: 80%;
        position: relative;
        z-index: 1;
        padding-bottom: 20px;
        padding-top: 20px;
        border-radius: 1rem;
    }
    .inner-carousel {
        display: inline-flex;
        margin-top: 0px;


        .item{ 
            min-width: 150px;
            backdrop-filter: blur(20px);
            padding: 0px 20px;
            pointer-events: none;

            @media (max-width:600px) {
            min-width: 100px;
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

const Testimonial = styled.h1`
    color: #EBEEF2;
    background-color: #013440;
    text-align: center;
    font-family: cursive;
    font-size: 20px;
    line-height: 2.5rem;
    padding: 0;
    margin: 0;

    @media (max-width:600px) {
        font-size: 18px;
    }
`

const BottomImg = styled.div`
        width:100%;
        height: 40vh;
        margin: 0;
        
        .bigPic {
            width: 100vw;
        }

        @media (max-width:600px) {
            width:100%;
            height: 100%;
            margin: 0;

            .bigPic {
            width: 100vw;
            object-fit:contain;
            padding-top: 30px;
   
        }
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
  

            <Container>
                <Title>
                A la Carte Florals 
                </Title>

                <Right>
                    <MainTitle data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out-quad">
                    
                    A la Carte Florals With our A la Carte flowers, you get to pick and choose which items you want off of our À la Carte menu.
                    </MainTitle>


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
            </Container>

        <Testimonial>
            <h4 data-aos="fade-down"
            data-aos-anchor-placement="top-bottom">
            "Excellent flower arrangements, delivered promptly, very reliable seller. Thank you"
            <br></br>-Heather L.-</h4>
          
        </Testimonial>

        <BottomImg>
            <img className='bigPic'
            src={img} alt='pic'/>
        </BottomImg>

          
        </Section>

    )
}

export default Portfolio_2