import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import styled from "styled-components";
import { Title } from "./index";

const Search = ({ data=[] }) => {
    const [searchedProjects, setSearchedProjects] = useState(data);
    const searching = e => {
        const text = e.target.value;
        if(!text) setSearchedProjects(data);
        else setSearchedProjects(data.filter(project => project.data.name.includes(text)));
    }

    return (  
        <Wrapper className="mini-section">
            <section className="containerBoot m-auto">
                <Title title="search" />

                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" placeholder="search for a name..." onChange={searching} />
                    {searchedProjects.length < 1 && <p>Try searching for something else...</p>}
                </form>

                <article className="projects-cont">
                    {searchedProjects.map(project => {
                        const { id, data:{ image, name } } = project;
                        const pathToImage = getImage(image.localFiles[0]);
                        return (
                            <div className="search-card" key={id}>
                                <GatsbyImage image={pathToImage} alt={name} className="card-img" />
                                <div className="card-info">
                                    <p>{name}</p>
                                </div>
                            </div>
                        )
                    })}
                </article>
                
            </section>
        </Wrapper>
    );
}
 
const Wrapper = styled.section`
    .projects-cont {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .search-card {
        flex-basis: 23%;
        margin-bottom: 32px;
    }
    .card-img {
        height: 10rem;
        object-fit: cover;
    }
    .card-info {
        padding: 16px;
        text-align: center;
        text-transform: capitalize;
        background-color: #fff;
    }

    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 32px;
        p {
            margin-top: 8px;
        }
    }
    input {
        display: block;
        width: 100%;
        max-width: 420px;
        font-size: 15px;
        padding: 8px 16px;
        border-radius: 4px;
        letter-spacing: .5px;
        border: 1px solid var(--clr-grey-4);
    }
    input:focus {
        outline: solid 2px var(--clr-primary-5); 
    }

    @media (max-width: 1199px){
        .search-card { flex-basis: 31%; }
        .card-img { height: 9rem; }
    }
    @media (max-width: 991px){
        .search-card { flex-basis: 48%; }
    }
    @media (max-width: 575px){
        .search-card { flex-basis: 100%; }
    }
`
export default Search;