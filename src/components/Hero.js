import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const Hero = () => {
    return (  
        <Wrapper className="bg-filler">
            <StaticImage src="../assets/images/mainBcg.png" alt="ooooooops" className="hero-img" placeholder="blurred" />

            <article className="hero-cont">
                <div className="info-cont">
                    <h2 className="col-fff capitalize">if you can dream it, we can create it</h2>
                    <h1 className="col-fff capitalize mTB-24">let your home be unique and stylish</h1>
                    <Link to="/projects" className="btn btn-l hero-btn">projects</Link>
                </div>
            </article>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    .hero-img {
        width: 100%;
        min-height: 100vh;
        object-fit: cover;
    }

    .hero-cont {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
    }

    .info-cont {
        width: 90%;
        height: 100%;
        max-width: 760px;
        margin: 0 auto;
        padding: 16px;
        display: flex;
        text-align: center;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    h2 {
        font-family: "Caveat";
    }

    .hero-btn {
        color: #fff;
        font-size: 18px;
        letter-spacing: 2px;
        border: 2px solid #fff;
        text-transform: capitalize;
    }
    .hero-btn:hover {
        color: #222;
        background-color: #fff;
    }
`
export default Hero;