import React from "react"
import { graphql } from "gatsby"
import { Layout, Hero, About, ProjectsComp, Reviews, Survey, Seo } from "../components"

export default function Home({ data }) {
  const { allAirtable: {nodes:projects}, reviews: {nodes:reviews}} = data;

  return (
    <Layout>
      <Hero />
      <About />
      <ProjectsComp title="latest projects" data={projects} />
      <Survey />
      <Reviews reviews={reviews} />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />;

export const query = graphql`
  query {
    allAirtable(limit: 3, sort: {data: {date: DESC}}, filter: {table: {eq: "Designs"}}) {
      nodes {
        id
        data {
          type
          name
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
              }
            }
          }
        }
      }
    }

    reviews:allAirtable(filter: {table: {eq: "Customers"}}) {
      nodes {
        id
        data {
          name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: FIXED, width: 150, height: 150)
              }
            }
          }
        }
      }
    }
  }
`