import styled from 'styled-components'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    margin: 0 auto;
    background-color: #FFFCF0;

    p{
        color: black;
        position:absolute;
        top: 40%;
        width:40%;
        left: 5%;

    }
`
const Title = styled.h1`
    font-size: 7rem;
    font-family: 'Abel', sans-serif;
    color: #2e2e27;
    font-weight: 300;
    text-shadow: 2px 2px 4px gray;
    position: absolute;
    top: 1rem;
    left: 5%;
    z-index: 5;

`


function Portfolio_2() {

    useEffect(() => {
        AOS.init({
            offset: 100, // offset (in px) from the original trigger point
   
            easing: 'ease'
        });
      }, []);

    return (

        <Section id='portfolio_2' data-scroll-section>
            <Title data-aos="fade-down"
            data-aos-offset="100"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-quad"
        >
            Event
            </Title>
  
           
        </Section>

    )
}

export default Portfolio_2