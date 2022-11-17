import styled from 'styled-components'
import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import bigPic from '../mainPics/event02.png'
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
        pointer-events: none;
    }

`
const Left = styled.div`
    width: 50%;

    position: relative;
    z-index: 5;

    @media (max-width:600px) {
        width: 100%;
        pointer-events: none;
    }

    .textBody {
        width: 70%;
        margin-left: 25px;
        width: 90%;
        margin-top: -70px;


        @media (max-width:600px) {
        font-size: 16px;
        width: 85%;
        margin-top: 0px;
        line-height: 1.5rem;
        }

    }
    p{
        font-family: 'Commissioner', sans-serif;

        color: #615A4F;
        font-size: 18px;
        font-weight: 300;
        line-height: 1.75rem;

        @media (max-width:600px) {
        font-size: 16px;
        line-height: 1.5rem;
        }
    }
`


const Title = styled.h1`
    font-size: 5.5rem;
    font-family:'Commissioner', sans-serif;
    color: #696E68;
    font-weight: 300;
    text-shadow: 2px 2px 4px #ABAAA9;
    margin-left: 25px;
    padding-bottom: 20px;

    @media (max-width:600px) {
        font-size: 4rem;
        margin: 0 auto;
        margin-left: 10px;
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
        pointer-events: none;

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
        box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 12px;
        

        @media (max-width:600px) {
            position: relative;
            width: 100%;
            margin-top: 0;
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
                <div className='textBody'>
                <p>
                Studio Batté is a floral design studio based in Seattle, WA. 
                We are inspired by PNW's seasonal flowers and natural beauty.
                <br></br>
                </p>
                <p>
                The word "batte" means 'in the field' in Korean.
                In Korea, which was an agricultural society, fields are not just a means of harvesting. In the fields we find hope, passion and love.
                <br/> </p>
                <p>
                Batté brings you such wonderful experiences and memories on your special day with lively beauty.
                </p>
               
                </div>
           
        
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