import React from 'react'
import NavbarList from './NavbarList'
import {navItemsLeft,navItemsRight} from './navItems'


const Navbar = () => {
  return <nav className='h-16 bg-tmdbDarkBlue flex text-white font-semibold justify-between items-center max-w-[1300px] mx-auto px-10'>
<NavbarList items={navItemsLeft}/>
<NavbarList items={navItemsRight}/>
  </nav>
}

export default Navbar