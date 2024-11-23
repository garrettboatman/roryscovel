import * as React from "react"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll'

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return(
  <header style={{zIndex: 100, position: 'relative'}} className={`content-container py-3 ${menuOpen ? `is-open` : ``} `}>
    <div className="flex mx-auto max-w-[1000px] relative justify-center md:justify-start items-center">
      <Link
        to="/"
        className="block align-middle no-underline"
      >
        <h1 className="text-3xl md:text-4xl text-text font-bold uppercase my-0">
          {/* Rory Scovel */} &nbsp;
        </h1>
      </Link>
      <a href="#" onClick={() => setMenuOpen(!menuOpen)} className="w-[25px] ml-auto absolute left-0">
        <div className={`bg-text h-[4px] mb-[5px] transition-all ${menuOpen ? `rotate-45 translate-y-[9px]` : ``}`}></div>
        <div className={`bg-text h-[4px] mb-[5px] transition-all ${menuOpen ? `opacity-0` : ``}`}></div>
        <div className={`bg-text h-[4px] mb-[5px] transition-all ${menuOpen ? `-rotate-45 translate-y-[-9px]` : ``}`}></div>
      </a>
      <div className={`absolute transition-all position-absolute translate-x-[200px] opacity-0 overflow-hidden w-0 left-[-20px] md:left-[-30px] top-[40px] rounded-lg z-50 bg-[#F5EBE6] shadow-lg ${menuOpen ? `w-auto !translate-x-[0px] opacity-100` : ``}`}>
        <nav className="p-[20px]">
          <ol className="list-none uppercase text-[20px] text-right">
            <li><a onClick={() => scrollTo('#tickets')} className="no-underline font-bold text-text p-1 inline-block hover:opacity-25 transition-all cursor-pointer">Tickets</a></li>
            {/* <li><a href="https://shop.roryscovel.com" className="no-underline font-bold text-text p-1 inline-block hover:opacity-25 transition-all cursor-pointer">Paintings</a></li> */}
            <li><a onClick={() => scrollTo('#penpals')} className="no-underline font-bold text-text p-1 inline-block hover:opacity-25 transition-all cursor-pointer">PenPals</a></li>
            <li><a onClick={() => scrollTo('#contact')} className="no-underline font-bold text-text p-1 inline-block hover:opacity-25 transition-all cursor-pointer">Contact</a></li>
          </ol>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header
