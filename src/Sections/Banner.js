import React from 'react'
import styled from 'styled-components'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import bannerPic from '../assets/field2.jpg'

import bannerPic2 from '../assets/banner.jpg'


const Section = styled.section`
    position: relative;
    height: 18vh;
    width: 100vw;
    margin: 0 auto;
    background-color: #2e2e27;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width:600px) {
        height: 14vh;
       
    }   

`

const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width:600px) {
        width: 100%;
        }   

`

const BannerComponent = styled.div`
    color: white;
    font-size: 24px;
    word-spacing: 5px;
    font-family: 'Commissioner', sans-serif;
    font-weight: 100;
    text-transform: uppercase;
    line-height: 1;
    text-shadow: 2px 2px 4px #DEDDDC;
    z-index: 19;
    opacity: 0.7;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;

    @media (max-width:600px) {
        font-size: 12px;
        line-height: 0;
        word-spacing: 0;

        }   


    
    span {
    display: block;
    background-color: #233B3B;
    margin-right: 10px;
    padding: 1rem 2rem;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 4px 12px;

    @media (max-width:600px) {
        margin: 0;
        padding: 15px 10px;
        margin-right: 15px;
        margin-left: 15px;
        font-size: 12px;
    }   

   
    }
`

const BannerPic = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background-color: #EEDEBB;
    width: 100%;
    height: 100%;
    object-fit: cover;
    


    img {
        width: 100%;
        height: auto;
        opacity: 0.8;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        
    }
`


function Banner() {

    useEffect(() => {
        AOS.init({
            offset: 200, // offset (in px) from the original trigger point
   
            easing: 'ease'
        });
      }, []);

  return (


        <Section>
            <Container>
            <BannerPic>
                <img src={bannerPic2}></img>
            </BannerPic>
            <BannerComponent>
                <span>We create garden-inspired pieces for a wedding.</span>         
            </BannerComponent>
   
        
            </Container>
        </Section>
  )
}

export default Banner