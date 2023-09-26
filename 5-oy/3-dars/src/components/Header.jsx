import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
 <header className='text-bg-dark py-3'>
    <nav className='d-flex   justify-content-between align-items-center gap-5'>
        <div>
            <Link className='text-reset text-decoration-none h1' to="#">Logo</Link>
        </div>
        <ul className='list-unstyled d-flex gap-3 fs-3'>
            <li><Link className='text-reset text-decoration-none' to="/">Home</Link></li>
            <li><Link className='text-reset text-decoration-none' to="/login">Login</Link></li>

        </ul>

    </nav>

 </header>
  )
}

export default Header
