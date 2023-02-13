import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return(
  <header className={`content-container py-3 ${menuOpen && `is-open`} `}>
    <div className="flex mx-auto max-w-[1000px] justify-center md:justify-start items-center relative">
      <Link
        to="/"
        className="block align-middle no-underline"
      >
        <h1 className="text-3xl md:text-4xl text-text font-bold uppercase my-0">
          Rory Scovel
        </h1>
      </Link>
      <a href="#" onClick={() => setMenuOpen(!menuOpen)} className="w-[25px] ml-auto absolute right-0">
        <div className="bg-text h-[4px] mb-[5px]"></div>
        <div className="bg-text h-[4px] mb-[5px]"></div>
        <div className="bg-text h-[4px]"></div>
      </a>
      
    </div>
    
  </header>
  )
}

export default Header
