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
  time = time.replace(":00", "");
  let standard = false;
  let penpals = false;
  let special = false;
  let tour = false;

  return (
    <div className="bg-[#F1E4CB] my-4 md:rounded-xl">
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
            } button ${data.showType} text-md px-5 py-2 transition-all hover:scale-[1.2]`}
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
            <div className="flex justify-center w-full cursor-pointer px-[8px]" onClick={() => {window.location.href = 'https://shop.roryscovel.com/products/the-upside-is'}}>
              <div>
                <StaticImage
                  src="../images/art_1.jpg"
                  
                  className="max-w-[400px] md:max-w-[500px]"
                  loading="eager"
                  objectFit="contain"
                  imgStyle={{ borderRadius: "15px" }}
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
            <div className="flex justify-center w-full cursor-pointer px-[8px]" onClick={() => {window.location.href = 'https://shop.roryscovel.com/products/alice'}}>
              <div>
                <StaticImage
                  src="../images/art_5.jpg"
                  className="max-w-[400px] md:max-w-[500px] "
                  loading="eager"
                  objectFit="contain"
                  imgStyle={{ borderRadius: "15px" }}
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
            <div className="flex justify-center w-full px-[8px]" onClick={() => {window.location.href = 'https://shop.roryscovel.com/products/11-mountain-lake-v-ol-2'}}>
              <div>
                <StaticImage
                  src="../images/art_2.jpg"
                  
                  className="max-w-[400px] md:max-w-[500px]"
                  loading="eager"
                  objectFit="contain"
                  imgStyle={{ borderRadius: "15px" }}
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
            <div className="flex justify-center w-full cursor-pointer px-[8px]" onClick={() => {window.location.href = 'https://shop.roryscovel.com/products/14-mountain-lake-vol-1'}}>
              <div>
                <StaticImage
                  src="../images/art_3.jpg"
                  className="max-w-[400px] md:max-w-[500px]"
                  loading="eager"
                  objectFit="contain"
                  imgStyle={{ borderRadius: "15px" }}
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
            <div className="flex justify-center w-full cursor-pointer px-[8px]" onClick={() => {window.location.href = 'https://shop.roryscovel.com/products/19-there-is-no-time'}}>
              <div>
                <StaticImage
                  src="../images/art_4.jpg"
                  className="max-w-[400px] md:max-w-[500px] "
                  loading="eager"
                  objectFit="contain"
                  imgStyle={{ borderRadius: "15px" }}
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
              src="../images/Rory_Scovel_Special_1.jpg"
              className={`mx-2 h-[100%] ${ticketHover ? `!hidden` : ``}`}
              loading="eager"
              objectFit="contain"
              placeholder="none"
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            <StaticImage
              src="../images/Rory_Scovel_Special_1.jpg"
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
            
              <div className="relative mx-4 md:mx-0" style={{paddingTop: '56.25%', borderRadius: 15, overflow: 'hidden'}}>
                <iframe className="absolute inset-0 w-full h-full" src="https://www.youtube.com/embed/39H40-sJGW4?si=27lk84bFtvtzU84l" title="Rory Scovel Comedy Special | Religion, Sex, and a Few Things In Between" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
              </div>
              {/* <br /> */}
              {/* <div className="relative mb-[-30px]">
                <div className="w-full text-center">
                  <span className="w-[240px] inline-block bold bg-[#c0ebdf] border-2 border-[#3a7f6d] text-[#3a7f6d] px-[15px] py-[3px] rounded-[100px] text-sm font-bold uppercase">
                    CONAN O'BRIEN PRESENTS
                  </span>
                </div>
              </div> */}

              <div className="bg-[#F1E4CB] my-4 py-4 md:rounded-xl">
                <div className="flex py-1 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    {/* <div className="text-xl tracking-tight mb-[3px] font-bold">
                      2.22.24
                    </div> */}
                    <div className="text-[18px] font-semibold text-black max-w-[300px] bold my-3 pr-1 uppercase">
                    Religion, Sex, and a Few Things In Between
                    </div>
                    <div className="uppercase font-bold text-[16px] mt-6 text-[#766363]">Streaming Feb 22 on
                      <span className="inline-block relative" style={{width: '100%'}}>
                        <svg viewBox="0 0 1000 274" style={{width: 80}} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_128_9)">
                          <path d="M157.65 0C130.367 0 102.651 12.1327 67.1348 39.416V6.93359H0V266.768H71.4668V105.234C102.65 80.5511 116.933 72.75 128.633 72.75C142.483 72.75 151.584 81.4164 151.584 103.066V266.768H223.033V104.801C254.217 80.5508 268.085 72.75 280.201 72.75C294.068 72.75 303.15 81.4164 303.15 103.066V266.768H374.602V77.9512C374.602 19.4845 341.251 0 309.201 0C281.918 0 254.2 11.2658 217.816 38.9824C206.15 9.9491 180.6 0 157.65 0ZM519.703 0C448.687 0 389.785 61.0664 389.785 136.85C389.785 212.633 448.687 273.701 519.703 273.701C554.786 273.701 585.104 260.719 608.504 232.553V266.768H676.502V6.93359H608.504V41.1484C585.104 12.9818 554.786 0 519.703 0ZM689.053 6.93359C718.501 52.8305 751.849 93.9777 790.83 135.125C751.849 177.989 718.501 222.604 689.053 266.768H775.23C795.579 233.853 818.529 203.97 844.961 175.822C870.943 203.97 892.59 233.853 912.955 266.768H1000C970.119 221.304 937.637 177.989 898.656 135.125C937.204 93.9777 970.119 51.5473 1000 6.93359H914.689C893.474 39.8481 870.526 67.5622 844.961 94.8438C818.979 67.5622 796.029 39.8481 775.23 6.93359H689.053ZM530.52 60.2012C572.953 60.2012 607.17 94.4164 607.17 136.85C607.17 179.283 572.953 213.5 530.52 213.5C488.086 213.5 453.869 179.3 453.869 136.85C453.869 94.3997 488.086 60.2012 530.52 60.2012ZM530.52 77.5176C498.036 77.5176 471.619 103.933 471.619 136.85C471.619 169.766 498.036 196.184 530.52 196.184C563.003 196.184 589.418 169.766 589.418 136.85C589.418 103.933 563.003 77.5176 530.52 77.5176Z" fill="#002BE7"/>
                        </g>
                        <defs>
                          <clipPath id="clip0_128_9">
                        <rect width="1000" height="273.701" fill="white"/>
                          </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 mb-auto">
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      className={`button special text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                      href="https://www.youtube.com/watch?v=39H40-sJGW4"
                    >
                      Trailer
                    </a>
                  </div>
                </div>
              </div>

              {/*
              {data.allContentfulShow.nodes.map(data => {
                if (data.showType === "special") {
                  return (
                    <Show
                      setTicketHover={() => false}
                      key={data.contentful_id}
                      data={data}
                      showType={data.showType}
                    />
                  );
                }
              })} */}

              {/* <div className="relative mt-10 mb-[-30px]">
                <div className="w-full text-center">
                  <span className="inline-block bold bg-[#ffe8d6] border-2 border-[#f96d03] text-[#f96d03] px-[15px] py-[3px] rounded-[100px] text-sm font-bold">
                    THE WHATEVER SHOW
                  </span>
                </div>
              </div>

              {data.allContentfulShow.nodes.map(data => {
                if (data.showType === "whatever") {
                  return (
                    <Show
                      setTicketHover={() => false}
                      key={data.contentful_id}
                      data={data}
                      showType={data.showType || ""}
                    />
                  );
                }
              })} */}

              {/* <div className="relative mt-10 mb-[-30px]">
                <div className="w-full text-center">
                  <span className="inline-block bold bg-[#257090] border-2 border-[#16473a] text-[#fff] px-[15px] py-[3px] rounded-[100px] text-sm font-bold">
                    PEN PALS
                  </span>
                </div>
              </div> */}

              {data.allContentfulShow.nodes.map(data => {
                if (data.showType === "penpals") {
                  return (
                    <Show
                      setTicketHover={() => false}
                      key={data.contentful_id}
                      data={data}
                      showType={data.showType || ""}
                    />
                  );
                }
              })}
              
              

              <div className="relative mt-10 mb-[-30px]">
                <div className="w-full text-center">
                  <span className="inline-block bold bg-[#ffe8d6] border-2 border-[#f96d03] text-[#f96d03] px-[15px] py-[3px] rounded-[100px] text-sm font-bold">
                    RORY AND CHAD WIN COMEDY
                  </span>
                </div>
              </div>

              {data.allContentfulShow.nodes.map(data => {
                if (data.showType === "standard") {
                  return (
                    <Show
                      setTicketHover={() => false}
                      key={data.contentful_id}
                      data={data}
                      showType={data.showType || ""}
                    />
                  );
                }
              })}

              <div className="relative mt-10 mb-[-30px]">
                <div className="w-full text-center">
                  <span className="w-[146px] inline-block bold bg-[#ebf3f6] border-2 border-[#03a8e6] text-[#03a8e6] px-[15px] py-[3px] rounded-[100px] text-sm font-bold">
                    Tour Dates
                  </span>
                </div>
              </div>
              {data.allContentfulShow.nodes.map(data => {
                if (!data.showType) {
                  return (
                    <Show
                      setTicketHover={setTicketHover}
                      key={data.contentful_id}
                      data={data}
                      showType={data.showType || ""}
                    />
                  );
                } 
              })}

            </div>
          </div>
        </div>
      </div>
      <div
        id="art"
        className="overflow-hidden my-20 md:my-[200px] content-container max-w-[1200px] mx-auto"
      >
        <h2 className="mt-5 font-bold text-3xl text-center uppercase ">Art</h2>
        <div className="text-md md:text-xl mt-2 text-center"><a className="text-[#000]" href="https://shop.roryscovel.com">Shop the Collection</a></div>
        <div className="relative flex mt-6 md:mt-10">
          <button
            className="z-10 relative left-[-15px] lg:left-[10%]"
            onClick={slideToPrevItem}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="bg-[#FFF6E5] p-2 w-10 md:w-20 h-10 md:h-20 rounded-md"
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
            className="z-10 relative right-[-15px] lg:right-[10%]"
            onClick={slideToNextItem}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="bg-[#FFF6E5] p-2 w-10 md:w-20 h-10 md:h-20 rounded-md"
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
      
      <div
        id="penpals"
        className="my-20 md:my-[200px] content-container max-w-[1200px"
      >
        <h2 className="font-bold text-3xl text-center uppercase pt-5">The Pen Pals Podcast</h2>
        <h3 className="text-md md:text-xl text-center">
          <a
            className="text-[#000] no-underline uppercase transition-all hover:opacity-40"
            href="https://thepenpalspod.com"
          >
            ThePenPalsPod.com
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
        showType
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
  <Seo title="RELIGION, SEX, AND A FEW THINGS IN BETWEEN | FEB 22 on MAX" />
)

export default IndexPage
