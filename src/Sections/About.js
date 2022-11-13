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
    background-color: #F2F2F0;
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
        width: 90%;
        font-size: 20px;
        margin-top: -70px;


        @media (max-width:600px) {
        font-size: 1rem;
        width: 85%;
        margin-top: 10px;
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
        margin-top: 50px;
        margin-left: 0;
        margin-right: 0;

    }

    .big-img{
        position: absolute;
        top: 10%;
        padding: 0;
        

        @media (max-width:600px) {
            position: absolute;
            top: 0px;
            padding: 0px;
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

                Studio Batté is a floral design studio based in Seattle, WA.<br></br>
                We are inspired by PNW's seasonal flowers and natural beauty.
                <br></br>  <br></br>
                The word "batte" means 'in the field' in Korean.
            
                In Korea, which was an agricultural society, fields are not just a means of harvesting. In the fields we find hope, passion and love.
                <br/> <br/>
                Batté brings you such wonderful experiences and memories on your special day with lively beauty.
                
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
            
            </Right>
            
        
        </Section>


    )
}

export default About