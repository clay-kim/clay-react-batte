import React from 'react'
import styled, { keyframes } from 'styled-components'
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser';



const Section = styled.section`
    position: relative;
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;
    background-color: #e9e6da;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width:600px) {
        position: relative;
        height: 100vh;
        width: 100vw;
        margin: 0 auto;
        background-color: #e9e6da;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      
    }

    h1{
        font-family: 'Poiret One', cursive;;;
        font-size: 130px;
        color: rgba(81, 82, 84);
        position: absolute;
        top: 5%;
        left: 10%;

        @media (max-width:600px) {
            font-size: 100px;
            position: absolute;
            top: 0;
    }

    }
    p{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgba(81, 82, 84);
        font-size: 1.5em;
        padding: 10px;
        border-top: 1px solid rgba(81, 82, 84);
        border-bottom: 1px solid rgba(81, 82, 84);
        position: absolute;
        top: 65%;
        left: 10%;
        line-height: 1.5rem;


        @media (max-width:600px) {
            font-size: 20px;
            position: absolute;
            top: 40%;
        }
    }
`
const ContactForm = styled.div`
    width: 40%;
    position: absolute;
    top: 25%;
    right: 0;

    @media (max-width:600px) {
        font-size: 16px;
        position: relative;
        width: 70%;
        margin-left: -40px;
        }

    input,
    textarea {
        width: 100%;
        font-size: 20px;
        resize: vertical;
        padding: 10px;
        color: rgb(42, 47, 43);
        outline: none;
        border: 2px solid rgba(131, 131, 131, 0.6);
        border-radius: 8px;
        margin-top: 5px;
        box-shadow: none;
        background-color: #C5D1C0;
        cursor: pointer;
        font-size: 20px;
        transition: 0.5s;
    }

    textarea:focus {
        border: 2px solid rgb(70, 103, 113);
    }

textarea {
    height: 52px;
    resize: vertical;
    width: 90%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;


    @media (max-width:600px) {
            width: 100%;
            font-size: 20px;
        }

}

textarea#message {
    height: 200px;
}


.submit-button {
    display: block;
    margin: 0 auto;
    text-align: center;
    width: 30%;
    margin-top: 50px;
    background-color: rgb(228, 228, 228);
    color: #656B63;
    font-size: 20px;
    border: 2px solid rgb(138, 138, 138);
    padding: 10px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.submit-button:hover {
    color: rgb(229, 164, 22);
    border: 2px solid rgb(70, 103, 113);
}

@media screen and (max-width: 1180px) {
    .contact-container {
        width: 100%;
        height: auto;
        padding: 70px 0px;
    }
}

@media screen and (max-width: 650px) {
    .contact-container .content {
        margin-bottom: 35px;
    }
    .contact-container h4 {
        font-size: 50px;
        margin-bottom: 10px;
        margin-top: 0;
    }

}

`


function Contact() {

    useEffect(() => {
        AOS.init({
            offset: 100, // offset (in px) from the original trigger point
            easing: 'ease'
        });
    }, []);

    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const handleName = (e) => {
        setUserName(e.target.value);
    }
    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setUserMessage(e.target.value);
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pkwhcsu', 'template_6kk4wze', form.current, 'NNsAiQ8PXH7vXzF9y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setUserName('');
        setUserEmail('');
        setUserMessage('');
    };


    return (

        <Section>
            <h1 id="text"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
            data-aos-offset="-200"
            data-aos-delay="1000"
            data-aos-duration="2000"
            >
            Get in <br></br>Touch</h1>

            <p data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
                Hello there!<br></br>
                Please contact me if you have any question
            </p>


            <ContactForm>
            <form ref={form} onSubmit={sendEmail}
            data-aos="fade-left"
            data-aos-offset="100"
            data-aos-duration="1000">
                <div className="form-group">
                    <label htmlFor='name'>
                        <textarea
                            placeholder='Your name'
                            type="text"
                            name="user_name"
                            message="name"
                            value={userName}
                            onChange={handleName}
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor='email'>
                        <textarea
                            placeholder='Email address'
                            type="text"
                            name="user_email"
                            message="email"
                            value={userEmail}
                            onChange={handleEmail}
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor='message'>
                        <textarea
                            placeholder='Inquiry message'
                            type="text"
                            name="message"
                            message="message"
                            value={userMessage}
                            onChange={handleMessage}
                        />
                    </label>
                </div>
                <button onClick={() => alert("Message sent!")}  type="submit" className="submit-button">Send</button>
            </form>
            </ContactForm>
        </Section>
 
    )
}

export default Contact