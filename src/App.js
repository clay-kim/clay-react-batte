
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import About from "./Sections/About"
import Home from "./Sections/Home"
import Footer from "./Components/Footer"
import Portfolio_1 from "./Sections/Portfolio_1"
import Portfolio_2 from "./Sections/Portfolio_2"
import Contact from "./Sections/Contact"
import Banner from "./Sections/Banner"
import styled from "styled-components";
import { useEffect, useRef, useState } from 'react'
import Scroll from "./Components/SmoothScroll";
import AOS from 'aos';
import Scrollbar from 'react-smooth-scrollbar';
import NavBar from "./Components/NavBar";

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);



  useEffect(() => {
   
    AOS.init({
        offset: 100, // offset (in px) from the original trigger point

        easing: 'ease'
    });
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   console.log("here:", offsetY);
  
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // console.log("here:", offsetY);
  
  return (
   <>
 
      <main className="App" >

          <Home />
          <About />
          <Portfolio_1 />
          <Banner />
          <Portfolio_2 />
          <Contact />
          <Footer />

      </main>
      
    </>
  );
}

export default App;
