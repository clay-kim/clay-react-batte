import styled from 'styled-components'
import React from 'react'
import NavBar from '../Components/NavBar'
import CoverVideo from '../Components/CoverVideo'

const Section = styled.section`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
    font-size: 100px;
    h1 {
        text-align: center;
    }
`

const item = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
    }
}

function Home() {
    return (

        <Section data-scroll-section id='home'>
            <NavBar variants={item}/>
            <CoverVideo />
            
        </Section>

    )
}

export default Home