import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { Title, Filters } from "./index";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const ProjectsComp = ({ title, data=[], page }) => {
    const [projects, setProjects] = useState(data);

    return (  
        <Wrapper className="section">
            <section className="containerBoot m-auto">
                <Title title={title} />

                {page && <Filters data={data} setProjects={setProjects} />}

                <article className="projects-cont">
                    {projects.map(project => {
                        const { id, data: {name, type, image} } = project;
                        const pathToImage = getImage(image.localFiles[0]);
                        return (
                            <div className="project-card box-shadow" key={id}>
                                <GatsbyImage image={pathToImage} alt={name} className="card-image" />

                                <div className="card-info">
                                    <p className="uppercase mb-8">- {type} -</p>
                                    <h4 className="capitalize">{name}</h4>
                                </div>
                            </div>
                        )
                    })}
                </article>

                {!page && <div className="d-flex justify-center">
                    <Link to="/projects" className="btn btn-l btn-prim capitalize">all projects</Link>
                </div>}
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

    .project-card {
        flex-basis: 30%;
        height: 420px;
        position: relative;
        margin-bottom: 32px;
        border-radius: 4px;
        transition: box-shadow .2s ease;
        background-color: var(--clr-primary-5);
    }
    .project-card:hover .card-image {
        opacity: .3;
    }
    .project-card:hover .card-info {
        opacity: 1;
    }
    .card-image {
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        transition: opacity .2s ease;
    }
    .card-info {
        position: absolute;
        left: 0;
        top: 50%;
        opacity: 0;
        width: 100%;
        color: #fff;
        text-align: center;
        transform: translateY(-50%);
        transition: opacity .2s ease;
    }

    @media (max-width: 991px){
        .project-card {
            flex-basis: 48%;
            height: 360px;
            
        }
    }
    @media (max-width: 767px){
        .project-card {
            flex-basis: 100%;
            height: 300px;
        }
    }
    @media (max-width: 575px){
        .project-card {
            height: 240px;
        }
    }
`
export default ProjectsComp;