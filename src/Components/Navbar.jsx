import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='flex gap-5'>
                <Link to="/">
                    <li>
                        Home
                    </li>
                </Link>
                <Link to="/about">
                    <li>
                        About Us
                    </li>
                </Link>
                <Link to="/contact">
                    <li>
                        Contact Us
                    </li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
