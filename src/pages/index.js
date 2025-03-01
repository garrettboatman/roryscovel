import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Apple from "-!svg-react-loader?props[]=className:w-4 h-4!../images/Apple.svg"
import Youtube from "-!svg-react-loader?props[]=className:w-4 h-4!../images/Youtube.svg"
import Patreon from "-!svg-react-loader?props[]=className:w-4 h-4!../images/Patreon.svg"
// import { useSpringCarousel } from "react-spring-carousel"

const Show = ({ data, setTicketHover }) => {
  const isSoldOut = data.soldOut
  const dateArray = data.date.split("|")
  const date = dateArray[0]
  let time = dateArray[1]
  time = time.replace(":00", "")
  let standard = false
  let penpals = false
  let special = false
  let tour = false

  return (
    <div className="bg-[#EED9CF] my-4 md:rounded-xl">
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
            className={`${isSoldOut && `disabled`} button ${
              data.showType
            } text-md px-5 py-2 transition-all hover:scale-[1.2]`}
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

  // const { carouselFragment, slideToPrevItem, slideToNextItem } =
  //   useSpringCarousel({
  //     itemsPerSlide: 1,
  //     withLoop: true,
  //     items: [
  //       {
  //         id: 1,
  //         renderItem: (
  //           <div className="flex justify-center w-full cursor-pointer px-[8px]" onClick={() => {window.location.href = 'https://shop.roryscovel.com/products/the-upside-is'}}>
  //             <div>
  //               <StaticImage
  //                 src="../images/art_1.jpg"

  //                 className="max-w-[400px] md:max-w-[500px]"
  //                 loading="eager"
  //                 objectFit="contain"
  //                 imgStyle={{ borderRadius: "15px" }}
  //                 quality={95}
  //                 placeholder="none"
  //                 formats={["auto", "webp", "avif"]}
  //                 alt=""
  //               />
  //             </div>
  //           </div>
  //         ),
  //       },
  //       {
  //         id: 5,
  //         renderItem: (
  //           <div className="flex justify-center w-full cursor-pointer px-[8px]" onClick={() => {window.location.href = 'https://shop.roryscovel.com/products/alice'}}>
  //             <div>
  //               <StaticImage
  //                 src="../images/art_5.jpg"
  //                 className="max-w-[400px] md:max-w-[500px] "
  //                 loading="eager"
  //                 objectFit="contain"
  //                 imgStyle={{ borderRadius: "15px" }}
  //                 quality={95}
  //                 placeholder="none"
  //                 formats={["auto", "webp", "avif"]}
  //                 alt=""
  //               />
  //             </div>
  //           </div>
  //         ),
  //       },
  //       {
  //         id: 2,
  //         renderItem: (
  //           <div className="flex justify-center w-full px-[8px]" onClick={() => {window.location.href = 'https://shop.roryscovel.com/products/11-mountain-lake-v-ol-2'}}>
  //             <div>
  //               <StaticImage
  //                 src="../images/art_2.jpg"

  //                 className="max-w-[400px] md:max-w-[500px]"
  //                 loading="eager"
  //                 objectFit="contain"
  //                 imgStyle={{ borderRadius: "15px" }}
  //                 quality={95}
  //                 placeholder="none"
  //                 formats={["auto", "webp", "avif"]}
  //                 alt=""
  //               />
  //             </div>
  //           </div>
  //         ),
  //       },
  //       {
  //         id: 3,
  //         renderItem: (
  //           <div className="flex justify-center w-full cursor-pointer px-[8px]" onClick={() => {window.location.href = 'https://shop.roryscovel.com/products/14-mountain-lake-vol-1'}}>
  //             <div>
  //               <StaticImage
  //                 src="../images/art_3.jpg"
  //                 className="max-w-[400px] md:max-w-[500px]"
  //                 loading="eager"
  //                 objectFit="contain"
  //                 imgStyle={{ borderRadius: "15px" }}
  //                 quality={95}
  //                 placeholder="none"
  //                 formats={["auto", "webp", "avif"]}
  //                 alt=""
  //               />
  //             </div>
  //           </div>
  //         ),
  //       },
  //       {
  //         id: 4,
  //         renderItem: (
  //           <div className="flex justify-center w-full cursor-pointer px-[8px]" onClick={() => {window.location.href = 'https://shop.roryscovel.com/products/19-there-is-no-time'}}>
  //             <div>
  //               <StaticImage
  //                 src="../images/art_4.jpg"
  //                 className="max-w-[400px] md:max-w-[500px] "
  //                 loading="eager"
  //                 objectFit="contain"
  //                 imgStyle={{ borderRadius: "15px" }}
  //                 quality={95}
  //                 placeholder="none"
  //                 formats={["auto", "webp", "avif"]}
  //                 alt=""
  //               />
  //             </div>
  //           </div>
  //         ),
  //       },
  //     ],
  //   })

  return (
    <Layout>
      <div className="flex max-w-[1200px] align-top mx-auto justify-center flex-col md:flex-row">
        <div className="">
          <div
            className="md:sticky md:top-[20px]"
            // className="md:self-end md:h-[calc(100vh_-_60px)] md:sticky md:top-[20px]"
          >
            <StaticImage
              src="../images/Rory_Scovel_Live.jpg"
              className={`mx-2 h-[100%]`}
              loading="eager"
              objectFit="contain"
              placeholder="none"
              formats={["auto", "webp", "avif"]}
              alt=""
            />
            {/* <StaticImage
              src="../images/Rory_Scovel_Special_1.jpg"
              className={`mx-2 h-[100%] ${!ticketHover ? `!hidden` : ``}`}
              loading="eager"
              objectFit="contain"
              placeholder="none"
              formats={["auto", "webp", "avif"]}
              alt=""
            /> */}
          </div>
        </div>

        <div id="tickets" className="w-full flex justify-start">
          <div className="w-full md:min-w-[380px] md:max-w-[480px] md:px-4">
            <div className="my-8 md:my-0">
              {/* <br /> */}
              {/* <div className="relative mb-[-30px]">
                <div className="w-full text-center">
                  <span className="w-[240px] inline-block bold bg-[#c0ebdf] border-2 border-[#3a7f6d] text-[#3a7f6d] px-[15px] py-[3px] rounded-[100px] text-sm font-bold uppercase">
                    CONAN O'BRIEN PRESENTS
                  </span>
                </div>
              </div> */}

              <div
                className="relative mb-4 mx-6 md:mx-0"
                style={{
                  paddingTop: "56.25%",
                  borderRadius: 15,
                  overflow: "hidden",
                }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/39H40-sJGW4?si=27lk84bFtvtzU84l"
                  title="Rory Scovel Comedy Special | Religion, Sex, and a Few Things In Between"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="bg-[#EED9CF] mb-4 py-4 md:rounded-xl">
                <div className="flex py-1 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    {/* <div className="text-xl tracking-tight mb-[3px] font-bold">
                      2.22.24
                    </div> */}
                    <div className="text-[18px] font-semibold text-black max-w-[300px] bold my-3 pr-1 uppercase"></div>
                    <div className="uppercase font-bold text-[16px] mb-3 text-[#766363]">
                      <span
                        style={{
                          display: "block",
                          width: 1,
                          height: 1,
                          opacity: 0,
                          overflow: "hidden",
                        }}
                      >
                        Religion, Sex, and a Few Things In Between -{" "}
                      </span>
                      Now Streaming on{" "}
                      <span
                        style={{
                          display: "block",
                          width: 1,
                          height: 1,
                          opacity: 0,
                          overflow: "hidden",
                        }}
                      >
                        MAX
                      </span>
                      <span
                        className="inline-block relative"
                        style={{ width: "100%" }}
                      >
                        <svg
                          role="img"
                          aria-label="Max"
                          viewBox="0 0 1000 274"
                          style={{ width: 80 }}
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clipPath="url(#clip0_128_9)">
                            <path
                              d="M157.65 0C130.367 0 102.651 12.1327 67.1348 39.416V6.93359H0V266.768H71.4668V105.234C102.65 80.5511 116.933 72.75 128.633 72.75C142.483 72.75 151.584 81.4164 151.584 103.066V266.768H223.033V104.801C254.217 80.5508 268.085 72.75 280.201 72.75C294.068 72.75 303.15 81.4164 303.15 103.066V266.768H374.602V77.9512C374.602 19.4845 341.251 0 309.201 0C281.918 0 254.2 11.2658 217.816 38.9824C206.15 9.9491 180.6 0 157.65 0ZM519.703 0C448.687 0 389.785 61.0664 389.785 136.85C389.785 212.633 448.687 273.701 519.703 273.701C554.786 273.701 585.104 260.719 608.504 232.553V266.768H676.502V6.93359H608.504V41.1484C585.104 12.9818 554.786 0 519.703 0ZM689.053 6.93359C718.501 52.8305 751.849 93.9777 790.83 135.125C751.849 177.989 718.501 222.604 689.053 266.768H775.23C795.579 233.853 818.529 203.97 844.961 175.822C870.943 203.97 892.59 233.853 912.955 266.768H1000C970.119 221.304 937.637 177.989 898.656 135.125C937.204 93.9777 970.119 51.5473 1000 6.93359H914.689C893.474 39.8481 870.526 67.5622 844.961 94.8438C818.979 67.5622 796.029 39.8481 775.23 6.93359H689.053ZM530.52 60.2012C572.953 60.2012 607.17 94.4164 607.17 136.85C607.17 179.283 572.953 213.5 530.52 213.5C488.086 213.5 453.869 179.3 453.869 136.85C453.869 94.3997 488.086 60.2012 530.52 60.2012ZM530.52 77.5176C498.036 77.5176 471.619 103.933 471.619 136.85C471.619 169.766 498.036 196.184 530.52 196.184C563.003 196.184 589.418 169.766 589.418 136.85C589.418 103.933 563.003 77.5176 530.52 77.5176Z"
                              fill="#002BE7"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_128_9">
                              <rect
                                width="1000"
                                height="273.701"
                                fill="white"
                              />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>
                    </div>
                    <div className="uppercase font-bold text-[16px] mb-3 text-[#766363]">
                      <span
                        style={{
                          display: "block",
                          width: 1,
                          height: 1,
                          opacity: 0,
                          overflow: "hidden",
                        }}
                      >
                        Religion, Sex, and a Few Things In Between -{" "}
                      </span>{" "}
                      <span
                        style={{
                          display: "block",
                          width: 1,
                          height: 1,
                          opacity: 0,
                          overflow: "hidden",
                        }}
                      >
                        Now Streaming on MAX
                      </span>
                      <span
                        className="inline-block relative"
                        style={{ width: "100%", maxWidth: 145 }}
                      >
                        <svg
                          viewBox="0 0 924 278"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M138.888 0.575684C62.4388 0.575684 0.461426 62.5514 0.461426 139.001C0.461426 215.453 62.4388 277.424 138.888 277.424C215.346 277.424 277.317 215.453 277.317 139.001C277.317 62.5564 215.346 0.582296 138.887 0.582296L138.888 0.575684ZM202.37 200.224C201.779 201.192 201.003 202.034 200.087 202.702C199.17 203.37 198.131 203.85 197.029 204.116C195.926 204.381 194.782 204.427 193.662 204.25C192.542 204.073 191.468 203.677 190.501 203.084C158 183.232 117.085 178.735 68.9004 189.744C66.6692 190.252 64.3279 189.853 62.3909 188.634C60.454 187.416 59.08 185.479 58.5708 183.248C58.3172 182.144 58.284 181 58.473 179.882C58.6621 178.765 59.0697 177.696 59.6725 176.736C60.2753 175.777 61.0615 174.945 61.986 174.29C62.9106 173.635 63.9553 173.168 65.0605 172.917C117.791 160.87 163.022 166.057 199.51 188.356C203.576 190.852 204.866 196.158 202.37 200.224ZM219.313 162.533C216.189 167.611 209.544 169.214 204.469 166.09C167.26 143.219 110.541 136.596 66.53 149.955C60.8222 151.679 54.7937 148.462 53.0614 142.765C52.2348 140.025 52.5282 137.07 53.8774 134.547C55.2266 132.023 57.5214 130.138 60.2585 129.304C110.531 114.05 173.029 121.439 215.759 147.697C220.834 150.821 222.437 157.465 219.313 162.533ZM220.768 123.284C176.153 96.7849 102.545 94.3484 59.9494 107.276C53.1093 109.351 45.8758 105.49 43.8029 98.6495C42.8062 95.3633 43.1555 91.8157 44.7739 88.7869C46.3923 85.758 49.1473 83.496 52.4332 82.4981C101.33 67.6542 182.616 70.5222 233.982 101.015C235.446 101.881 236.724 103.027 237.744 104.388C238.765 105.749 239.506 107.298 239.927 108.946C240.348 110.594 240.439 112.309 240.196 113.992C239.953 115.676 239.381 117.295 238.511 118.757C234.874 124.909 226.907 126.937 220.774 123.284H220.768ZM377.075 128.362C353.172 122.663 348.924 118.662 348.924 110.257C348.924 102.316 356.396 96.9717 367.521 96.9717C378.298 96.9717 388.976 101.03 400.184 109.384C400.514 109.637 400.944 109.738 401.357 109.672C401.565 109.642 401.765 109.57 401.944 109.46C402.123 109.35 402.278 109.205 402.399 109.034L414.069 92.583C414.299 92.2568 414.397 91.8551 414.341 91.4596C414.286 91.0641 414.082 90.7045 413.771 90.454C400.432 79.7541 385.422 74.5521 367.868 74.5521C342.064 74.5521 324.03 90.0391 324.03 112.197C324.03 135.959 339.585 144.373 366.463 150.868C389.324 156.136 393.191 160.549 393.191 168.437C393.191 177.182 385.389 182.62 372.827 182.62C358.875 182.62 347.486 177.909 334.758 166.9C334.441 166.632 334.032 166.496 333.618 166.52C333.188 166.553 332.808 166.751 332.543 167.065L319.451 182.637C318.906 183.298 318.972 184.256 319.6 184.818C334.411 198.042 352.627 205.018 372.298 205.018C400.101 205.018 418.069 189.827 418.069 166.305C418.119 146.457 406.234 135.465 377.124 128.384L377.075 128.362ZM480.982 104.79C468.932 104.79 459.047 109.538 450.881 119.266V108.316C450.883 107.902 450.72 107.504 450.429 107.21C450.137 106.916 449.741 106.75 449.327 106.748H427.921C427.061 106.748 426.367 107.452 426.367 108.316V229.978C426.367 230.838 427.061 231.549 427.921 231.549H449.327C450.187 231.549 450.881 230.838 450.881 229.978V191.579C459.047 200.72 468.932 205.2 480.982 205.2C503.38 205.2 526.059 187.959 526.059 155C526.092 122.034 503.413 104.789 480.999 104.789L480.982 104.79ZM501.165 155C501.165 171.776 490.834 183.496 476.023 183.496C461.394 183.496 450.352 171.247 450.352 155C450.352 138.751 461.394 126.506 476.023 126.506C490.586 126.504 501.165 138.487 501.165 155ZM584.162 104.79C555.317 104.79 532.721 127 532.721 155.359C532.721 183.413 555.168 205.382 583.815 205.382C612.759 205.382 635.421 183.248 635.421 155C635.421 126.848 612.908 104.794 584.162 104.794V104.79ZM584.162 183.661C568.822 183.661 557.251 171.33 557.251 154.992C557.251 138.579 568.425 126.669 583.815 126.669C599.254 126.669 610.891 138.996 610.891 155.351C610.891 171.76 599.651 183.661 584.162 183.661ZM697.012 106.748H673.457V82.67C673.458 82.4651 673.418 82.262 673.341 82.0723C673.263 81.8827 673.149 81.7102 673.004 81.5647C672.86 81.4192 672.689 81.3035 672.5 81.2243C672.311 81.1451 672.108 81.1038 671.903 81.103H650.497C649.637 81.103 648.926 81.8072 648.926 82.67V106.748H638.645C637.785 106.748 637.091 107.452 637.091 108.316V126.709C637.091 127.572 637.785 128.278 638.645 128.278H648.926V175.876C648.926 195.1 658.497 204.853 677.391 204.853C685.061 204.853 691.425 203.266 697.425 199.861C697.921 199.596 698.219 199.067 698.219 198.505V180.984C698.219 180.455 697.938 179.942 697.475 179.661C697.25 179.517 696.99 179.435 696.723 179.424C696.456 179.412 696.191 179.471 695.954 179.595C691.838 181.661 687.854 182.62 683.391 182.62C676.531 182.62 673.457 179.496 673.457 172.52V128.286H697.012C697.871 128.286 698.566 127.582 698.566 126.717V108.326C698.573 108.121 698.538 107.916 698.464 107.725C698.389 107.534 698.277 107.359 698.133 107.213C697.989 107.066 697.817 106.95 697.627 106.872C697.438 106.794 697.234 106.755 697.028 106.757L697.012 106.748ZM779.067 106.842V103.885C779.067 95.1848 782.406 91.3053 789.877 91.3053C794.34 91.3053 797.927 92.1913 801.944 93.5302C802.44 93.6856 802.952 93.6079 803.349 93.312C803.55 93.1668 803.714 92.9754 803.826 92.754C803.938 92.5325 803.996 92.2874 803.994 92.0392V74.005C803.998 73.6682 803.892 73.3393 803.692 73.0681C803.492 72.797 803.209 72.5984 802.886 72.5024C798.655 71.2412 793.233 69.9469 785.1 69.9469C765.347 69.9469 754.883 81.0782 754.883 102.126V106.655H744.602C743.742 106.655 743.031 107.359 743.031 108.222V126.709C743.031 127.572 743.742 128.278 744.602 128.278H754.883V201.679C754.883 202.555 755.594 203.249 756.454 203.249H777.843C778.719 203.249 779.414 202.555 779.414 201.679V128.283H799.398L830.012 201.679C826.541 209.382 823.119 210.919 818.457 210.919C814.689 210.919 810.705 209.795 806.655 207.564C806.271 207.37 805.828 207.329 805.415 207.448C805.002 207.597 804.655 207.894 804.49 208.291L797.233 224.209C796.886 224.97 797.183 225.846 797.911 226.243C805.481 230.342 812.308 232.094 820.755 232.094C836.558 232.094 845.302 224.722 852.989 204.919L890.115 108.984C890.211 108.747 890.247 108.489 890.218 108.235C890.189 107.98 890.097 107.737 889.949 107.528C889.81 107.318 889.621 107.146 889.399 107.027C889.177 106.909 888.928 106.846 888.677 106.847H866.394C865.717 106.847 865.121 107.272 864.907 107.898L842.079 173.082L817.085 107.855C816.974 107.559 816.775 107.305 816.515 107.125C816.255 106.945 815.947 106.848 815.631 106.847H779.067V106.842ZM731.493 106.748H710.087C709.228 106.748 708.517 107.452 708.517 108.316V201.679C708.517 202.555 709.228 203.249 710.087 203.249H731.493C732.353 203.249 733.064 202.555 733.064 201.679V108.323C733.064 108.117 733.024 107.912 732.945 107.722C732.866 107.531 732.751 107.358 732.605 107.212C732.459 107.066 732.285 106.951 732.095 106.872C731.904 106.794 731.7 106.753 731.493 106.754V106.748ZM720.914 64.2342C712.434 64.2342 705.558 71.0974 705.558 79.5756C705.558 81.5921 705.955 83.5889 706.727 85.452C707.499 87.315 708.63 89.0077 710.056 90.4336C711.482 91.8594 713.175 92.9904 715.038 93.7619C716.901 94.5335 718.898 94.9305 720.914 94.9303C729.394 94.9303 736.254 88.0588 736.254 79.5756C736.254 71.099 729.378 64.2342 720.914 64.2342ZM908.397 136.768C899.934 136.768 893.338 129.965 893.338 121.705C893.338 113.445 900.016 106.566 908.48 106.566C916.943 106.566 923.538 113.366 923.538 121.62C923.538 129.88 916.86 136.768 908.397 136.768ZM908.48 108.063C900.76 108.063 894.925 114.196 894.925 121.705C894.925 129.212 900.727 135.262 908.397 135.262C916.116 135.262 921.951 129.134 921.951 121.62C921.951 114.113 916.149 108.063 908.48 108.063ZM911.819 123.168L916.083 129.132H912.48L908.645 123.661H905.355V129.132H902.347V113.323H909.389C913.075 113.323 915.488 115.203 915.488 118.366C915.505 120.958 914.001 122.542 911.835 123.168H911.819ZM909.273 116.036H905.355V121.036H909.273C911.223 121.036 912.397 120.079 912.397 118.533C912.397 116.907 911.223 116.036 909.273 116.036Z"
                            fill="#1ED760"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="uppercase font-bold text-[16px] mb-3 text-[#766363]">
                      <span
                        style={{
                          display: "block",
                          width: 1,
                          height: 1,
                          opacity: 0,
                          overflow: "hidden",
                        }}
                      >
                        Religion, Sex, and a Few Things In Between -{" "}
                      </span>{" "}
                      <span
                        style={{
                          display: "block",
                          width: 1,
                          height: 1,
                          opacity: 0,
                          overflow: "hidden",
                        }}
                      >
                        Now Streaming on Apple Music
                      </span>
                      <span
                        className="inline-block relative"
                        style={{ width: "100%", maxWidth: 145 }}
                      >
                        <svg
                          viewBox="0 0 800 192"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M126.205 101.717C125.951 86.239 132.637 74.1902 146.246 65.5659C138.571 54.4049 127.251 48.1317 112.283 46.7293C106.959 46.2293 100.151 47.4878 91.8707 50.5366C82.9634 53.839 77.9488 55.4805 76.8366 55.4805C74.4854 55.4805 69.9707 54.0927 63.2805 51.2951C56.6049 48.5049 50.9098 47.1098 46.2073 47.1098C38.2902 47.239 30.9244 49.4268 24.122 53.6732C17.3171 57.9244 11.8756 63.7317 7.79512 71.0805C2.59268 80.2171 0 91.1268 0 103.807C0 115.222 1.91219 126.634 5.74634 138.056C9.33415 148.966 13.9195 158.541 19.4805 166.778C24.4244 174.263 28.7707 179.717 32.4707 183.146C37.7976 188.471 43.2341 191.012 48.8098 190.754C52.3951 190.622 57.0927 189.293 62.9098 186.749C68.3488 184.351 73.7976 183.144 79.2439 183.144C84.3146 183.144 89.5683 184.344 95.0195 186.749C101.078 189.293 106.032 190.559 109.866 190.559C115.559 190.31 120.876 187.834 125.832 183.146C127.556 181.617 129.446 179.527 131.485 176.863C133.839 173.761 136.1 170.589 138.263 167.351C140.066 164.559 141.769 161.704 143.368 158.79C145.084 155.653 146.602 152.412 147.915 149.085C148.527 147.69 149.083 146.266 149.583 144.807C150.076 143.349 150.571 141.863 151.066 140.339C146.488 138.315 142.341 135.449 138.632 131.768C130.476 123.663 126.329 113.639 126.205 101.717ZM260.783 135.634H259.883L222.193 49.5024H192.595V188.471H218.39V98.4683H219.588L251.085 169.937H269.176L300.573 98.4683H301.776V188.471H327.868V49.5024H298.473L260.783 135.634ZM102.815 31.322C109.376 23.0756 112.656 14.1976 112.656 4.68293V2.78293C112.656 2.14391 112.593 1.5122 112.471 0.878052C107.89 1.13171 103.037 2.59269 97.8976 5.25122C92.7659 7.91952 88.5293 11.2854 85.1829 15.3366C78.5049 23.3341 75.161 31.8902 75.161 41.0244V42.8268C75.161 43.4024 75.2244 44.0024 75.3463 44.6415C85.6195 45.6537 94.7756 41.2122 102.815 31.322ZM629.351 49.5024H658.344V188.473H629.351V49.5024ZM745.91 71.5927C763.105 71.5927 772.198 84.8293 772.198 99.0829H800V96.1293C800 69.2537 779.502 46.8585 745.707 46.8585C709.512 46.8585 687.92 70.6805 687.92 111.305V126.985C687.92 167.598 709.312 191.124 745.605 191.124C780.3 191.124 800 168.412 800 143.168V140.115H772.2C772.2 154.476 763.305 166.385 746.115 166.385C728.512 166.385 717.312 153.861 717.312 127.08V111.412C717.312 84.7244 728.615 71.5927 745.91 71.5927ZM438.756 137.259C438.756 155.895 427.859 166.173 411.863 166.173C395.766 166.173 384.871 155.993 384.871 137.259V49.5024H356.073V141.332C356.073 170.966 377.066 191.122 411.859 191.122C446.554 191.122 467.646 170.966 467.646 141.332V49.5024H438.756V137.259ZM563.571 107.534L542.878 102.856C530.683 100.302 524.283 94.9098 524.283 86.8634C524.283 76.1781 532.978 69.4561 546.983 69.4561C562.778 69.4561 570.676 78.5171 571.373 88.2927H598.368C598.068 63.7537 577.576 46.6512 547.078 46.6512C518.188 46.6512 495.39 61.8244 495.39 89.1073C495.39 112.727 511.39 123.715 530.585 127.9L551.078 132.68C564.876 135.837 571.873 140.422 571.873 149.883C571.873 160.683 563.273 168.015 547.18 168.015C529.883 168.015 520.783 158.849 519.988 148.563H492.19C492.598 168.215 505.593 191.122 545.785 191.122C579.576 191.122 600.476 174.324 600.476 147.029C600.466 121.78 583.568 111.905 563.571 107.534Z"
                            fill="#231F20"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 mb-auto text-right">
                    <a
                      // onFocus={() => setTicketHover(true)}
                      // onBlur={() => setTicketHover(false)}
                      // onMouseOver={() => setTicketHover(true)}
                      // onMouseOut={() => setTicketHover(false)}
                      className={`button special text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                      href="https://www.max.com/movies/rory-scovel-religion-sex-and-a-few-things-in-between/f897aaef-6232-4ffb-8cde-d0b7736a15aa"
                    >
                      WATCH&nbsp; IT
                    </a>
                    <br />
                    <br />
                    <a
                      // onFocus={() => setTicketHover(true)}
                      // onBlur={() => setTicketHover(false)}
                      // onMouseOver={() => setTicketHover(true)}
                      // onMouseOut={() => setTicketHover(false)}
                      className={`button spotify text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                      href="https://open.spotify.com/album/7DIu01NXX8PgWyHplUxihu"
                    >
                      &nbsp;&nbsp;&nbsp; LISTEN &nbsp;&nbsp;&nbsp;
                    </a>
                    <br />
                    <br />
                    <a
                      // onFocus={() => setTicketHover(true)}
                      // onBlur={() => setTicketHover(false)}
                      // onMouseOver={() => setTicketHover(true)}
                      // onMouseOut={() => setTicketHover(false)}
                      className={`button appleMusic text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                      href="https://music.apple.com/us/album/religion-sex-and-a-few-things-in-between/1759566173"
                    >
                      &nbsp;&nbsp;&nbsp; LISTEN &nbsp;&nbsp;&nbsp;
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
              </div>

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
              })} */}

              <div className="relative mt-10 mb-[-30px]">
                <div className="w-full text-center">
                  <span className="w-[146px] inline-block bold bg-[#ffe9d9] border-2 border-[#f96d03] text-[#f96d03] px-[15px] py-[3px] rounded-[100px] text-sm font-bold">
                    LIVE SHOWS
                  </span>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      3.12.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Buntport Theater
                    </div>
                    <div className="uppercase font-bold">Denver, CO</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://buntport.com/show/an-hour-with-rory-scovel-march-2025"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      3.13.25 - 3.15.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Comedy at The Carlson
                    </div>
                    <div className="uppercase font-bold">Rochester, NY</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://ci.ovationtix.com/35843/production/1223234"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      3.20.25 - 3.22.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Punchline Comedy Club
                    </div>
                    <div className="uppercase font-bold">Houston, TX</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://www.ticketmaster.com/rory-scovel-tickets/artist/1488444?venueId=476361"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      3.29.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Egyptian Theater
                    </div>
                    <div className="uppercase font-bold">Boise, ID</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      href="https://link.dice.fm/Zafd636ddb30"
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      4.18.25 - 4.19.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Desert Ridge Improv
                    </div>
                    <div className="uppercase font-bold">Phoenix, AZ</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://www.desertridgeimprov.com/events/104358"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      4.25.25 - 4.26.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Wise Guys Comedy Club
                    </div>
                    <div className="uppercase font-bold">
                      Salt Lake City, UT
                    </div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://www.wiseguyscomedy.com/utah/salt-lake-city/the-gateway/e/rory-scovel"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      4.28.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Sugar Club
                    </div>
                    <div className="uppercase font-bold">Dublin, Ireland</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://www.ticketmaster.ie/artist/1488444?venueId=198345"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      4.30.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Kookaburra
                    </div>
                    <div className="uppercase font-bold">Berlin, Germany</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://www.eventbrite.de/e/rory-scovel-should-i-live-here-2025-stand-up-tour-berlin-tickets-1249186653909"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      5.1.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Club Haug
                    </div>
                    <div className="uppercase font-bold">
                      Rotterdam, Netherlands
                    </div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://comedyclubhaug.com/shows/rory-scovel-111499617"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      5.2.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Toomler
                    </div>
                    <div className="uppercase font-bold">
                      Amsterdam, Netherlands
                    </div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://app.guts.tickets/ah2hi4/nbex0s"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      5.3.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Y Tabernacl
                    </div>
                    <div className="uppercase font-bold">
                      Machynlleth, Wales
                    </div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://machcomedyfest.co.uk/show/2025/rory-scovels-should-i-live-here-tour/"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      5.6.25 - 5.10.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Soho Theatre
                    </div>
                    <div className="uppercase font-bold">London, UK</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://sohotheatre.com/events/rory-scovels-should-i-live-here-tour/"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      5.12.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Fairfield Social Club
                    </div>
                    <div className="uppercase font-bold">Manchester, UK</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://www.seetickets.com/event/rory-scovel-should-i-live-here/fairfield-social-club/3349790"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      5.15.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Empire Comedy Club
                    </div>
                    <div className="uppercase font-bold">Portland, ME</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://www.empirecomedyme.com/calendar/2025-05?day=15"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      5.16.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Empire Comedy Club
                    </div>
                    <div className="uppercase font-bold">Portland, ME</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://www.empirecomedyme.com/calendar/2025-05?day=16"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      5.17.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Empire Comedy Club
                    </div>
                    <div className="uppercase font-bold">Portland, ME</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      href="https://www.empirecomedyme.com/calendar/2025-05?day=17"
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      6.6.25 - 6.7.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Commonwealth Sanctuary
                    </div>
                    <div className="uppercase font-bold">Cincinnati, OH</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                      href="https://www.simpletix.com/e/rory-scovel-presented-by-commonwealth-sanc-tickets-201952"
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-[#EED9CF] my-4 md:rounded-xl">
                <div className="flex py-4 px-5 items-center justify-between">
                  <div className="text-lg leading-tight">
                    <div className="text-xl tracking-tight mb-[3px]">
                      6.12.25 - 6.14.25
                    </div>
                    <div className="uppercase text-[16px] text-[#766363] mb-[5px] pr-1">
                      Capitol Hill Comedy Bar
                    </div>
                    <div className="uppercase font-bold">Seattle, WA</div>
                  </div>
                  <div>
                    <a
                      onFocus={() => setTicketHover(true)}
                      onBlur={() => setTicketHover(false)}
                      onMouseOver={() => setTicketHover(true)}
                      onMouseOut={() => setTicketHover(false)}
                      className={`button standard text-md px-5 py-2 transition-all hover:scale-[1.2]`}
                      href="https://www.comedyslashbar.com/events/108335"
                    >
                      {"Tickets"}
                    </a>
                  </div>
                </div>
              </div>
              {/* {data.allContentfulShow.nodes.map(data => {
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
              })} */}
            </div>

            {/* <div className="relative mt-10 mb-[-30px]">
                <div className="w-full text-center">
                  <span className="inline-block bold bg-[#ffe8d6] border-2 border-[#f96d03] text-[#f96d03] px-[15px] py-[3px] rounded-[100px] text-sm font-bold">
                    @ THE ELYSIAN
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
              })} */}
          </div>
        </div>
      </div>

      {/* <div
        id="art"
        className="overflow-hidden my-20 md:my-[200px] max-w-[1200px] mx-auto"
      >
        <h2 className="mt-5 font-bold text-3xl text-center uppercase left-[-150px]">Paintings</h2>
        <br /> <br />
        <div className="relative">
          <div className="absolute flex items-center justify-center z-10 h-[100%] w-[100%]">
            <a className="button white text-md px-5 py-2 transition-all scale-[1.4] md:scale-[1.5] hover:scale-[1.6]" href="https://shop.roryscovel.com/discount/GOODBYE-LA">Shop New Collection</a>
          </div>
          <StaticImage
            src="../images/paintings_bg.jpg"
            className="overflow-hidden md:rounded-2xl absolute inset-0 object-cover min-w-[600px]"
            quality={95}
            placeholder="none"
            formats={["auto", "webp", "avif"]}
            alt=""
          />
        </div>
        

        
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
      </div> */}

      <div
        id="penpals"
        className="my-20 md:my-[200px] content-container max-w-[1200px"
      >
        <h2 className="font-bold text-3xl text-center uppercase pt-5">
          The Pen Pals Podcast
        </h2>
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
        <div className="bg-[#EED9CF] md:rounded-lg content-container max-w-lg mx-auto py-6">
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
