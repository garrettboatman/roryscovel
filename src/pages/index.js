import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Apple from "-!svg-react-loader?props[]=className:w-4 h-4!../images/Apple.svg"
import Youtube from "-!svg-react-loader?props[]=className:w-4 h-4!../images/Youtube.svg"
import Patreon from "-!svg-react-loader?props[]=className:w-4 h-4!../images/Patreon.svg"
import { useSpringCarousel } from "react-spring-carousel"

const Show = ({ data, setTicketHover }) => {
  const isSoldOut = data.soldOut
  const dateArray = data.date.split("|")
  const date = dateArray[0]
  let time = dateArray[1]
  time = time.replace(":00", "")

  return (
    <div className="bg-[#F1E4CB] my-4 md:rounded-lg">
      <div className="flex py-4 px-5 items-center justify-between">
        <div className="text-lg leading-tight">
          <div className="text-xl tracking-tight mb-[3px]">
            {date}{" "}
            {time !== "12AM" && time !== "11:59PM" && (
              <span className="font-normal text-sm">({time})</span>
            )}
          </div>
          <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
            {data.venue}
          </div>
          <div className="uppercase font-bold">{data.city}</div>
        </div>
        <div>
          <a
            onFocus={() => setTicketHover(true)}
            onBlur={() => setTicketHover(false)}
            onMouseOver={() => setTicketHover(true)}
            onMouseOut={() => setTicketHover(false)}
            className={`${
              isSoldOut && `disabled`
            } button text-md px-5 py-2 transition-all hover:scale-[1.2]`}
            href={data.ticketLink}
          >
            {isSoldOut ? "Sold Out" : "Tickets"}
          </a>
        </div>
      </div>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const [ticketHover, setTicketHover] = React.useState(false)

  const { carouselFragment, slideToPrevItem, slideToNextItem } =
    useSpringCarousel({
      itemsPerSlide: 1,
      withLoop: true,
      items: [
        {
          id: 1,
          renderItem: (
            <div className="flex justify-center w-full px-[8px]">
              <div>
                <StaticImage
                  src="../images/art_1.jpg"
                  className="max-w-[400px] md:max-w-[500px] rounded-lg"
                  loading="eager"
                  objectFit="contain"
                  imgStyle={{ borderRadius: "10px" }}
                  quality={95}
                  placeholder="none"
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
              </div>
            </div>
          ),
        },
        {
          id: 2,
          renderItem: (
            <div className="flex justify-center w-full px-[8px]">
              <div>
                <StaticImage
                  src="../images/art_2.jpg"
                  className="max-w-[400px] md:max-w-[500px] rounded-lg"
                  loading="eager"
                  objectFit="contain"
                  imgStyle={{ borderRadius: "10px" }}
                  quality={95}
                  placeholder="none"
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
              </div>
            </div>
          ),
        },
        {
          id: 3,
          renderItem: (
            <div className="flex justify-center w-full px-[8px]">
              <div>
                <StaticImage
                  src="../images/art_3.jpg"
                  className="max-w-[400px] md:max-w-[500px] rounded-lg"
                  loading="eager"
                  objectFit="contain"
                  imgStyle={{ borderRadius: "10px" }}
                  quality={95}
                  placeholder="none"
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
              </div>
            </div>
          ),
        },
        {
          id: 4,
          renderItem: (
            <div className="flex justify-center w-full px-[8px]">
              <div>
                <StaticImage
                  src="../images/art_4.jpg"
                  className="max-w-[400px] md:max-w-[500px] rounded-lg"
                  loading="eager"
                  objectFit="contain"
                  imgStyle={{ borderRadius: "10px" }}
                  quality={95}
                  placeholder="none"
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
              </div>
            </div>
          ),
        },
        {
          id: 5,
          renderItem: (
            <div className="flex justify-center w-full px-[8px]">
              <div>
                <StaticImage
                  src="../images/art_5.jpg"
                  className="max-w-[400px] md:max-w-[500px] rounded-lg"
                  loading="eager"
                  objectFit="contain"
                  imgStyle={{ borderRadius: "10px" }}
                  quality={95}
                  placeholder="none"
                  formats={["auto", "webp", "avif"]}
                  alt=""
                />
              </div>
            </div>
          ),
        },
      ],
    })

  return (
    <Layout>
      <div className="flex max-w-[1200px] align-top mx-auto justify-center flex-col md:flex-row">
        <div className="">
          <div className="md:self-end md:h-[calc(100vh_-_60px)] md:sticky md:top-[20px]">
            <StaticImage
              src="../images/Rory_Scovel_TheLastTour_1.jpg"
              className={`mx-2 h-[100%] ${ticketHover ? `!hidden` : ``}`}
              loading="eager"
              objectFit="contain"
              placeholder="none"
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/Rory_Scovel_TheLastTour_2.jpg"
              className={`mx-2 h-[100%] ${!ticketHover ? `!hidden` : ``}`}
              loading="eager"
              objectFit="contain"
              placeholder="none"
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </div>
        </div>
        <div id="tickets" className="w-full flex justify-start">
          <div className="w-full md:min-w-[380px] md:max-w-[480px] md:px-4">
            <div className="my-8 md:my-2">
              <div className="bg-[#F1E4CB] my-4 md:rounded-lg relative">
                <div className="absolute w-full text-center top-[-13px]">
                  <span className="inline-block bold bg-[#ffe8d6] border border-[#f96d03] text-[#f96d03] px-[15px] py-[3px] rounded-[100px] text-sm font-bold">
                    @ THE ELYSIAN
                  </span>
                </div>
                <div className="flex py-6 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      The Elysian Theater
                    </div>
                    <div className="uppercase font-bold">Los Angeles, CA</div>
                  </div>
                  <div>
                    <a
                      className="button whatever text-md px-5 py-2 transition-all hover:scale-[1.2]"
                      href="https://www.eventbrite.com/e/an-hour-w-rory-scovel-tickets-492110364347"
                    >
                      Tickets
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="w-full text-center">
                  <span className="w-[196px] inline-block bold bg-[#03a8e6] border border-[#0087B8] text-[#FFF] px-[15px] py-[3px] rounded-[100px] text-sm font-bold">
                    THE LAST TOUR
                  </span>
                </div>
              </div>
              {data.allContentfulShow.nodes.map(data => (
                <Show
                  setTicketHover={setTicketHover}
                  key={data.contentful_id}
                  data={data}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="penpals"
        className="my-20 md:my-[200px] content-container max-w-[1200px"
      >
        <h2 className="font-bold text-3xl text-center uppercase ">PenPals</h2>
        <h3 className="text-md md:text-xl text-center">
          <a
            className="text-[#000] no-underline uppercase transition-all hover:opacity-40"
            href="https://penpalspod.com"
          >
            PenPalsPod.com
          </a>
        </h3>
        <div className="flex max-w-xl mx-auto mt-6 md:mt-10">
          <div className="flex-1 pr-1 md:pr-3">
            <StaticImage
              src="../images/pen_pals.jpg"
              className={`rounded-2xl`}
              quality={95}
              placeholder="none"
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </div>
          <div className="flex-1 pl-1 md:pr-3 flex justify-center flex-col">
            <div className="w-full bg-white flex rounded-lg border-[#CCC] border overflow-hidden border-solid transition-all hover:scale-110">
              <a
                aria-label="Listen on Apple Podcasts"
                href="https://podcasts.apple.com/us/podcast/the-pen-pals-podcast/id1400536434"
              >
                <Apple className="w-full" />
              </a>
            </div>
            <div className="bg-white mt-4 flex rounded-lg border-[#CCC] border overflow-hidden border-solid transition-all hover:scale-110">
              <a
                aria-label="Subscribe on Patreon"
                href="https://www.patreon.com/penpals"
              >
                <Patreon className="w-full" />
              </a>
            </div>
            <div className="bg-white mt-4 flex rounded-lg border-[#CCC] border overflow-hidden border-solid transition-all hover:scale-110">
              <a
                aria-label="Watch on YouTube"
                href="https://www.youtube.com/playlist?list=PLvCb1y9SFPQxNpoc4SjwwC1-lztk5d5cn"
              >
                <Youtube className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        id="art"
        className="overflow-hidden my-20 md:my-[200px] content-container max-w-[1200px"
      >
        <h2 className="font-bold text-3xl text-center uppercase ">Art</h2>
        <h3 className="text-md md:text-xl text-center">GALLERY OPENING SOON</h3>
        <div className="relative flex mt-6 md:mt-10">
          <button
            className="z-10 relative left-[-15px]"
            onClick={slideToPrevItem}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="bg-[#FFF6E5] p-2 w-10 md:w-20 h-10 md:h-20 rounded-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          {carouselFragment}
          <button
            className="z-10 relative right-[-15px]"
            onClick={slideToNextItem}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="bg-[#FFF6E5] p-2 w-10 md:w-20 h-10 md:h-20 rounded-lg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      <div id="contact" className="py-5 max-w-[420px] mx-auto">
        <div className="bg-[#F1E4CB] md:rounded-lg content-container max-w-lg mx-auto py-6">
          <h2 className="font-bold text-3xl text-center uppercase">Contact</h2>
          <h3 className="text-md md:text-lg text-center">
            <a
              className="text-[#000] no-underline uppercase transition-all hover:opacity-40"
              href="mailto:Andrew.skikne@unitedtalent.com"
            >
              Andrew.skikne@unitedtalent.com
            </a>
          </h3>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulShow(sort: { date: ASC }, filter: { isFuture: { eq: true } }) {
      nodes {
        contentful_id
        city
        date(formatString: "M.D.YY|h:mmA")
        venue
        ticketLink
        soldOut
      }
    }
  }
`

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => (
  <Seo title="“The Last Tour” 🎟️ TICKETS AVAILABLE NOW!" />
)

export default IndexPage
