import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Layout, Seo } from "../components";

const Error = () => {
    return (  
        <Layout>
            <Wrapper className="bg-filler page-filler">
                <section className="containerBoot m-auto cont">
                    <h1 className="mb-24">Oops...</h1>
                    <h3 className="mb-32">The page you are looking for doesn't exist.</h3>
                    <Link to="/" className="btn btn-m btn-prim capitalize">back home</Link>
                </section>
            </Wrapper>
        </Layout>
    );
}
export const Head = () => <Seo title="Error" />;
const Wrapper = styled.section`
    display: flex;
    padding-top: 5rem;
    background-color: var(--clr-gold);

    .cont {
        display: flex;
        padding: 2rem 0;
        text-align: center;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    h1,h3 { color: #fff; }
`
export default Error;