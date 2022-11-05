import styled from 'styled-components'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import bigPic from '../mainPics/event02.jpg'
import smallPic1 from '../mainPics/event03.jpg'
import smallPic2 from '../mainPics/wedding10.jpg'



const Section = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    display: flex;
    margin: 0 auto;
    background-color: #FFFCF0;
    overflow: auto;

    @media (max-width:600px) {
        position: relative;
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
    }

`
const Left = styled.div`
    width: 50%;
    font-family: 'Abel', sans-serif;
    position: relative;
    z-index: 5;

    @media (max-width:600px) {
        width: 100%;
    }


    p{
        color: black;
        width: 70%;
        margin-left: 25px;
        margin-top: -50px;
        font-size: 22px;

        @media (max-width:600px) {
        font-size: 1.25rem;
        width: 90vw;
        margin-top: 0px;
        }
    }
`
const Title = styled.h1`
    font-size: 7rem;
    font-family: 'Abel', sans-serif;
    color: #696E68;
    font-weight: 300;
    text-shadow: 2px 2px 4px gray;
    margin-left: 25px;

    @media (max-width:600px) {
        font-size: 5rem;
        margin: 0 auto;
        padding: 15px;
    }

`

const Right = styled.div`
    width: 50%;
    position: relative;

    @media (max-width:600px) {
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    img{
        width: 100%;
        height: auto;
    }

    .big-img{
        position: absolute;
        top: 10%;
        

        @media (max-width:600px) {
            position: absolute;
            top: 0px;
        }
    }

    .small-img1 {
        width: 60%;
        position: absolute;
        right: 70%;
        bottom: 10%;

        @media (max-width:600px) {
            position: absolute;
            top: 300px;
            left: 10px;
            width: 60%;
            z-index: 2;
        }

    }
    .small-img2 {
        width: 40%;
        position: absolute;
        right: 1%;
        bottom: 17%;

        @media (max-width:600px) {
            position: absolute;
            top: 350px;
            right: 10px;
            width: 40%;
            z-index: 0;
        }
    
    }
`


function About() {

    useEffect(() => {
        AOS.init({
            offset: 200, // offset (in px) from the original trigger point
   
            easing: 'ease-out'
        });
      }, []);

      
      
    return (
       
        <Section id='about'>

            <Left>
                <Title data-aos="fade-left"
                data-aos-offset="120"
                data-aos-delay="1"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-quad">
                Batté
                </Title>

                <p data-aos="slide-up"
                data-aos-offset="120"
                data-aos-delay="2"
                data-aos-duration="2500"
                data-aos-easing="ease-in-out-quad">

                Studio Batté is a floral design studio based in Seattle, WA. Batté means “in the field” in Korean and rhymes with “latté”. 
              
                <br /> <br />
                We are inspired by seasonal flowers and the beauty of nature in the PNW. 
                
            </p>
        
            </Left>
     
            <Right>

                <img data-aos="zoom-in-down"
                    data-aos-offset="150"
                    data-aos-delay="2"
                    data-aos-duration="3000"
                    className='big-img'
                    data-aos-anchor-easing='ease-in-out'
                    src={bigPic} alt='pic'/>
                    
                <img data-aos="fade-up"
                    data-aos-offset="100"
                    data-aos-delay="2"
                    data-aos-duration="2000"
                    src={smallPic1} className='small-img1' alt='pic'/>

                <img data-aos="fade-down"
                    data-aos-offset="100"
                    data-aos-delay="1"
                    data-aos-duration="2000"
                    src={smallPic2} className='small-img2' alt='pic'/>
            
                
            
            </Right>
            
        
        </Section>


    )
}

export default About