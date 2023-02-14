/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children }) {
  const { site, featuredImage } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
          }
        }
        featuredImage: file(
          absolutePath: { glob: "**/src/images/Rory_Scovel_TheLastTour.png" }
        ) {
          childImageSharp {
            gatsbyImageData(layout: FIXED, width: 1080)
          }
        }
      }
    `
  )

  const ogImage = featuredImage?.childImageSharp?.gatsbyImageData;
  const URL = site.siteMetadata?.siteUrl

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const SEOtitle = defaultTitle ? title === 'Home' ? defaultTitle : `${defaultTitle} | ${title}` : title;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={SEOtitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${URL}${ogImage.images.fallback.src}`} />
      <meta property="og:image:width" content={ogImage.width} />
      <meta property="og:image:height" content={ogImage.height} />
      <meta property="og:image" content=""/>

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={SEOtitle} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
