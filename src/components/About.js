import React from "react";
import Title from "./Title";
import styled from "styled-components";
import services from "../assets/constants/services";

const About = () => {
    return (  
        <Wrapper className="section">
            <section className="containerBoot m-auto">
                <Title title="about us" />

                <article className="services">
                    {services.map(service => {
                        const { id, icon, label, text } = service;
                        return (
                            <div className="service-card" key={id}>
                                <span className="service-icon">{icon}</span>
                                <h4 className="service-label">{label}</h4>
                                <p className="service-text light-grey">{text}</p>
                            </div>
                        )
                    })}
                </article>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    background-color: #fff;

    .services {
        display: flex;
        margin-top: 60px;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .service-card {
        flex-basis: 22%;
    }

    .service-icon {
        display: block;
        line-height: 0;
        font-size: 48px;
        margin-bottom: 12px;
        color: var(--clr-primary-5);
    }
    .service-label {
        font-weight: 500;
        text-transform: capitalize;
    }

    @media (max-width: 1199px){
        .service-card {
            flex-basis: 30%;
            margin-bottom: 16px;
        }
    }
    @media (max-width: 991px){
        .service-card {
            flex-basis: 46%;
            margin-bottom: 32px;
        }
    }
    @media (max-width: 575px){
        .service-card {
            flex-basis: 100%;
        }
    }
`
export default About;