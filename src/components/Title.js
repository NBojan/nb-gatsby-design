import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
    return (  
        <Wrapper>
            <h2 className="capitalize"><span>/</span> {title || "Default Title"}</h2>
        </Wrapper>
    );
}
 
const Wrapper = styled.div`
    text-align: center;
    margin-bottom: 32px;
    h2 {
        font-weight: 600;
    }
    span {
        color: var(--clr-primary-5);
    }
`
export default Title;