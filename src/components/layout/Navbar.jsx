import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link'
import propTypes from 'prop-types';


function Navbar({ title='Github finder' }) {
  return (
      <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
          <div className="container mx-auto">
              <div className="flex px-2 mx-2">
                  <FaGithub className='inline pr-2 text-3xl' />
                  <Link href='/' className='text-lg font-bold aling-middle'>{title}</Link>
              </div>

              <div className="flex-1 px-2 mx-2">
                  <div className="flex justify-end">
                      <Link href="/" className='btn btn-ghost btn-sm rounded-btn'>Home</Link>
                      <Link href="/about" className='btn btn-ghost btn-sm rounded-btn'>About</Link>
                  </div>
              </div>
          </div>
    </nav>
  )
}

// Navbar.defaultProps = {
//     title: ''
// }

Navbar.propTypes = {
    title: propTypes.string
}

export default Navbar;