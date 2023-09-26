import React from 'react'
import togle from '../assets/togle.png'
import logo from '../assets/logo.png'
import {Link} from "react-router-dom"
import { useLocation } from 'react-router-dom'

const Header = () => {
  const {pathname}=useLocation();
  console.log(12);
  console.log(pathname);
  return (
    <header >
        <nav className='container '>
            <div className='d-flex justify-content-between align-items-center  nav-one'>
            <div className='d-flex gap-3 align-items-center'>
                <div className='d-flex gap-3 align-items-center'>
                <img src="/email.png" alt="" />
                <a className='text-white text-decoration-none' href="#">Info@youremail.com</a>
                </div>
                <div className='d-flex gap-3 align-items-center'>
                    <img src="/phone.png" alt="" />
                    <a className='text-white text-decoration-none' href="#">(480) 555-0103</a>
                </div>
            </div>
            <div className='d-flex gap-4'>
                <a href="#">
                 <img src="/facebook.png"  alt="icon" />
                </a>
                <a href="#">
                 <img src="/insta.png"  alt="icon" />
                </a>
                <a href="#">
                  <img src="/twiter.png"  alt="icon" />
                </a>
                <a href="#">
                  <img src="/youtube.png"  alt="icon" />
                </a>
            </div>
            </div>
            <div className='d-flex justify-content-between nav-two align-items-center '>
                <div className="togle">
                <img  src={togle} alt="" />

                </div>
                <div  className='d-flex justify-content-start align-items-center gap-3 left-header header-pages'>
                    <Link className={`text-${pathname==="/" ? "primary"  : "dark"} `} to="/">HOME</Link>
                    <Link className={`text-${pathname==="/about" ? "primary"  : "dark"} `} to="/about">ABOUT</Link>
                    <Link className={`text-${pathname==="/features" ? "primary"  : "dark"} `} to="/features">FEATURE</Link>
                </div>
                <img className='logo ' src={logo} alt="" />
                <div className='d-flex justify-content-end align-items-center gap-3  right-header header-pages'>
                    <Link className={`text-${pathname==="/screenshot" ? "primary"  : "dark"} `} to="/screenshot">SCREENSHOT</Link>
                    <Link className={`text-${pathname==="/blog" ? "primary"  : "dark"} `} to="/blog">BLOG</Link>
                    <Link className={` ${pathname==="/download" ? "bg-light border border-primary text-primary"  : "text-light"} download `}  to="/download">DOWNLOAD</Link>
                </div>
                <div className="left-download">
                <a className='download' href="#">DOWNLOAD</a>

                </div>

            </div>
        </nav>
    </header>
  )
}

export default Header
