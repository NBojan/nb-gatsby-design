import React from "react";
import styled from "styled-components";

const Footer = () => {
    return (  
        <Wrapper>
            <section className="containerBoot m-auto">
                <p>&#169; {new Date().getFullYear()} NBojan. All rights reserved. Built with Gatsby</p>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    height: 5rem;
    background-color: var(--clr-darkmode1);
    
    section {
        height: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    p {
        color: #fff;
    }
    @media (max-width: 767px){
        p {font-size: 15px}
    }
    @media (max-width: 575px){
        p {font-size: 14px}
    }
`
export default Footer;