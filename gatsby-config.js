/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `Design Site`,
    description: `Design Site, created using Gatsby / React, Airtable. `,
    author: `@nbojan`,
    url: `https://ndesign-gatsby.netlify.app`,
    image: `/mainBcg.png`,
    twitterUsername: `@Trojka33`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_KEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE,
            tableName: `Designs`,
            mapping: { image: `fileNode` },
          },
          {
            baseId: process.env.GATSBY_AIRTABLE_BASE,
            tableName: `Customers`,
            mapping: { image: `fileNode` },
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand\:400,500,600,700`,
          `Cabin\:400,500,600,700`,
          `Caveat\:400,500,600`
        ],
        display: 'swap'
      }
    }
  ],
}
