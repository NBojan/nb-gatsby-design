import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Title } from "./index";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = ({ reviews=[] }) => {
    const [index, setIndex] = useState(0);

    const nextRev = () => setIndex((index + 1) % reviews.length);
    const prevRev = () => {
        if(index === 0) return setIndex(reviews.length - 1);
        else setIndex(index - 1);
    }

    useEffect(() => {
        const timer = setTimeout(() => nextRev(), 5000);
        return () => clearTimeout(timer);
    }, [index])

    return (  
        <Wrapper className="section">
            <section className="containerBoot m-auto">
                <Title title="reviews" />

                <article className="review-container">
                    {reviews.map((review, rvIndex) => {
                        const { id, data: {name, quote, title, image} } = review;
                        const pathToImage = getImage(image.localFiles[0]);
                        let position = "next";
                        if(rvIndex === index) position = "active";
                        else if((rvIndex === index - 1) || (index === 0 && rvIndex === reviews.length - 1)) position = "prev";
                        return (
                            <div className={`review-card ${position}`} key={id}>
                                <GatsbyImage image={pathToImage} alt={name} className="card-image" />
                                <div className="review-info mt-16 ta-center">
                                    <h4 className="uppercase">{name}</h4>
                                    <h5 className="mb-12 capitalize">{title}</h5>
                                    <p className="desc light-grey">{quote}</p>
                                    <span className="quotes"><FaQuoteRight /></span>
                                </div>
                            </div>
                        )
                    })}

                    <div className="buttons">
                        <button type="button" className="btn" onClick={prevRev}><FaChevronLeft /></button>
                        <button type="button" className="btn" onClick={nextRev}><FaChevronRight /></button>
                    </div>
                </article>
            </section>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    .review-container {
        height: 450px;
        margin: 0 auto;
        padding: 0 32px;
        max-width: 760px;
        position: relative;
        overflow: hidden;
    }
    .buttons {
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        button {
            display: flex;
            color: #fff;
            padding: 6px;
            font-size: 18px;
            background-color: var(--clr-grey-5);
        }
        button:hover {
            background-color: var(--clr-primary-5);
        }
    }

    .review-card {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        padding: 0 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        transition: all .2s ease;
    }
    .prev {
        transform: translateX(-100%);
    }
    .next {
        transform: translateX(100%);
    }
    .active {
        opacity: 1;
        transform: translateX(0);
    }
    .card-image {
        border-radius: 50%;
    }
    .quotes {
        display: block;
        font-size: 40px;
        margin-top: 16px;
        color: var(--clr-primary-5);
    }

    @media (max-width: 767px){
        .desc { font-size: 15px; }
    }
    @media (max-width: 575px){
        .desc { font-size: 14px; }

        .card-image {
            width: 125px !important;
            height: 125px !important;
        }
    }
`
export default Reviews;