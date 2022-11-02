import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from "framer-motion"
import { useEffect, useState } from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";


const animation = keyframes`
    0% {opacity: 0; transform: translateX(-200px);}
    100% {opacity: 1; transform: translateX(0%);}
`

const animation2 = keyframes`
    0% {opacity: 0; transform: translateX(250%);}
    100% {opacity: 1; transform: translateX(0%);}
`


const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    background-color: #e9e6da;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    h1{
        font-size: 130px;
        color: rgba(81, 82, 84);
        animation-name: ${animation};
        animation-delay: 2s;
        animation-fill-mode: forwards;
        animation-duration: 4s;
        position: absolute;
        top: 5%;
        left: 10%;
    }
    p{
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
      color: rgba(81, 82, 84);
      font-size: 1.25em;
      padding: 10px;
      border-top: 1px solid rgba(81, 82, 84);
      border-bottom: 1px solid rgba(81, 82, 84);
      position: absolute;
      top: 50%;
      left: 10%;
      line-height: 1.25rem;
      animation-name: ${animation2};
      animation-delay: 1s;
        animation-fill-mode: forwards;
        animation-duration: 3s;
    }
`

const Anime = styled.div`
  border: 4px solid rgba(255, 255, 255);
  background-color: aqua;
  width: 700px;
  height: 300px;
  position: absolute;
  bottom: 30%;
  right: 20%;
z-index: 11;
visibility: visible;
`

function Contact() {

    return (



        <Section id='contact' data-scroll-section>

            <h1 id="text">Get in <br></br>
                Touch</h1>

            <p>
                Hello there!<br></br>
                If you would like to contact me, please contact me at www.gmail.com
            </p>

         
        </Section>
 
    )
}

export default Contact