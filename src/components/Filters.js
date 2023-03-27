import React, { useState } from "react";
import styled from "styled-components";

const Filters = ({ data=[], setProjects }) => {
    const [active, setActive] = useState(0);
    const uniqueTypes = ["all", ...new Set(data.map(project => project.data.type))];
    
    const filterProject = (type, index) => {
        setActive(index);
        if(type === "all") setProjects(data)
        else setProjects(data.filter(project => project.data.type === type));
    }

    return (  
        <Wrapper>
            {uniqueTypes.map((type, index) => (
                <button type="button" className={`filter-btn ${index === active ? "active btn" : "btn"}`} onClick={() => filterProject(type, index)} key={index}>{type}</button>
            ))}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 32px;

    .filter-btn {
        letter-spacing: 1px;
        font-size: 18px;
        border-radius: 0;
        margin-right: 16px;
        color: var(--clr-grey-4);
        text-transform: capitalize;
    }

    .active,
    .filter-btn:hover {
        box-shadow: 0px 2px var(--clr-primary-5);
    }

    @media (max-width: 767px){
        .filter-btn { font-size: 17px; }
    }
    @media (max-width: 575px){
        .filter-btn { font-size: 16px; }
    }
`
export default Filters;