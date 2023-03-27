import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import { Layout, ProjectsComp, Search, Seo } from "../components";

const Projects = ({ data }) => {
    const { allAirtable: {nodes:projects} } = data;
    return (  
        <Wrapper>
            <Layout>
                <ProjectsComp title="projects" data={projects} page />
                <Search data={projects} />
            </Layout>
        </Wrapper>
    );
}
export const Head = () => <Seo title="Projects" />;

const Wrapper = styled.section`
    nav { background-color: var(--clr-primary-5); }

`
export const query = graphql`
  query {
    allAirtable(filter: {table: {eq: "Designs"}}, sort: {data: {date: DESC}}) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`

export default Projects;