import styled from 'styled-components'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion"
import img from '../mainPics/wedding16.jpg'
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
import img11 from '../mainPics/ALaCarte16.jpg'
import img12 from '../mainPics/ALaCarte12.jpg'
import img13 from '../mainPics/ALaCarte13.jpg'
import img14 from '../mainPics/ALaCarte11.jpg'
import img15 from '../mainPics/ALaCarte14.jpg'
import img16 from '../mainPics/ALaCarte15.jpg'
import img17 from '../mainPics/ALaCarte17.jpg'




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
    width: 90%;
    font-size: 18px;
    font-weight: 300;
    word-spacing: 0px;
    line-height: 1.75em;
    font-family: 'Commissioner', sans-serif;
    color: #254038;
    position: relative;
    text-align: right;
    padding-bottom:10px;
    border-bottom: 1px solid #BEBDBF;

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
    text-align: center;
    height: 100px;
    font-size: 38px;
    justify-content: center;
    font-family:'Commissioner', sans-serif;
    color: #262626;
    font-weight: 100;
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
        justify-content: flex-start;
        width: 80%;
        position: relative;
        z-index: 1;
        padding-bottom: 20px;
        padding-top: 10px;
        border-radius: 1.25rem;
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
            padding: 0px 15px;
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
    color: white;
    background-color: #013440;
    opacity: 0.9;
    height: 130px;
    justify-content: center;
    text-align: center;
    font-family: 'Commissioner', sans-serif;

    font-size: 16px;
    line-height: 2.5rem;
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;

    @media (max-width:600px) {
        font-size: 13px;
        font-weight: 100;
        line-height: 1.5rem;
        height: 80px;
    }
`

const BottomImg = styled.div`
        width:100%;
        margin: 0;
        display: flex;
        flex-direction:column;
        align-items: flex-start;
                
    
        .bigPic {
            width: 100vw;
            height: 400px;
            object-fit: contain;
            opacity: 0.9;
        
       
        }

        @media (max-width:600px) {
            width:100%;
            height: 100%;
            margin: 0;

            .bigPic {
            width: 100vw;
            object-fit: contain;
            margin-top: -40px;
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
        img01, img02, img03, img04, img05, img06, img07, img08, img09, img10, img11, img12, img13, img14, img15, img16, img17
    ];

    return (

        <Section id='portfolio_2'>
  

            <Container>
                <Title data-aos="zoom-out-right"
                data-aos-delay="1"
                data-aos-duration="3000"
                >
                A la Carte Florals 
                </Title>

                <Right>
                    <MainTitle data-aos="fade-up"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out-quad">
                    
                    A la Carte Florals With our A la Carte flowers, you get to pick and choose which items you want off of our À la Carte menu.
                
                    </MainTitle>


                    <motion.div className='carousel' ref={slider_wrapper} whileTap={{ cursor: "grabbing" }}
                    >
                                <motion.div
                                    drag="x"
                                    dragConstraints={{ right: 0, left: -width}}
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
            data-aos-delay="0"
            data-aos-duration="2000">
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