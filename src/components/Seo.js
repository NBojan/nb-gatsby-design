import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Seo = ({ title, description, pathname, children }) => {
    const data = useStaticQuery(query);
    const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = data.site.siteMetadata;

  const seo = {
    title: title || "Page",
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{title} | {defaultTitle}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta name="og:title" content={seo.title} />
      <meta name="og:url" content={seo.url} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:creator" content={seo.twitterUsername} />

      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href={`/favicon.ico`} />
      {children}
    </>
  )
}

const query = graphql`
  query {
    site {
      siteMetadata {
        author
        description
        image
        title
        twitterUsername
        url
      }
    }
  }
`
export default Seo