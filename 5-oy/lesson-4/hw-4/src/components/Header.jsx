import React from 'react'
import {Link} from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const {pathname}=useLocation();
    console.log(pathname);
  return (
    <header>
        <nav className='container d-flex justify-content-between align-items-center'>
           <img src="/logo.jpg" alt="" />
           <div className='d-flex gap-5'>
            <Link className={`link ${pathname==='/' ? 'text-light' : "link1"}`} to="/">Home</Link>
            <Link className={`link ${pathname==='/product' ? 'text-light' : "link2"}`} to="/product">Product</Link>
           </div>
        </nav>
    </header>
  )
}

export default Header
