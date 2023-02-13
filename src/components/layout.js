/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <div className="mt-[50px] md:mt-[100px] w-[300px] left-[-20px] md:w-[500px] mx-auto content-container relative text-center">
            
            <a href="#" className="absolute top-[-25px] left-[220px] md:top-[-25px] md:left-[380px]">
              <StaticImage
                src="../images/insta.png"
                className={`w-[27px] z-10`}
                quality={95}
                placeholder="none"
                formats={["auto", "webp", "avif"]}
                alt=""
              />
            </a>

            <a href="#" className="absolute top-[-10px] left-[250px] md:top-[-5px] md:left-[412px]">
              <StaticImage
                src="../images/youtube.png"
                className={`w-[27px] z-10`}
                quality={95}
                placeholder="none"
                formats={["auto", "webp", "avif"]}
                alt=""
              />
            </a>

            <a href="#" className="absolute top-[22px] left-[263px] md:top-[28px] md:left-[437px]">
              <StaticImage
                src="../images/twitter.png"
                className={`w-[27px] z-10`}
                quality={95}
                placeholder="none"
                formats={["auto", "webp", "avif"]}
                alt=""
              />
            </a>

            <a href="#" className="absolute top-[50px] left-[255px] md:top-[60px] md:left-[443px]">
              <StaticImage
                src="../images/spotify.png"
                className={`w-[27px] z-10`}
                quality={95}
                placeholder="none"
                formats={["auto", "webp", "avif"]}
                alt=""
              />
            </a>

            <a href="#" className="absolute top-[82px] left-[243px] md:top-[97px] md:left-[433px]">
              <StaticImage
                src="../images/imdb.png"
                className={`w-[27px] z-10`}
                quality={95}
                placeholder="none"
                formats={["auto", "webp", "avif"]}
                alt=""
              />
            </a>

            <StaticImage
              src="../images/RoryScovel-doggo.jpg"
              className={` mx-auto`}
              quality={95}
              placeholder="none"
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <div className="absolute bottom-0 w-full left-0 text-[#FFF] font-bold text-sm md:text-xl text-center pl-8 pb-5"> © {new Date().getFullYear()} &middot; Rory Scovel</div>
          </div>
         
        </footer>
      </div>
    </>
  )
}

export default Layout
