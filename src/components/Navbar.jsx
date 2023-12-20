import React from 'react'
import logo from '../assets/Logo.jpg';

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
            <a href="/" className='text-2xl font-semibold flex items-center space-x-3' hei>
                <img src={logo} alt="" className='w-10 inlink-block items-center'/><span>XYZ</span></a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
