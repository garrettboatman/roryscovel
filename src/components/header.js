import * as React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="content-container py-3">
    <div className="flex max-w-xl mx-auto justify-center items-center relative">
      <Link
        to="/"
        className="block align-middle no-underline"
      >
        <h1 className="text-3xl text-text font-bold uppercase my-0">
          Rory Scovel
        </h1>
      </Link>
      <a href="#" className="w-[25px] ml-auto absolute right-0">
        <div className="bg-text h-[4px] mb-[5px]"></div>
        <div className="bg-text h-[4px] mb-[5px]"></div>
        <div className="bg-text h-[4px]"></div>
      </a>
      
    </div>
    
  </header>
)

export default Header
