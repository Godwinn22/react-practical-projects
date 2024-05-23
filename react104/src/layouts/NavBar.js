import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
	<div className='w-full py-4 bg-white flex justify-center'>
	  <Link className='px-4 text-amber-600 text-lg font-bold' to='/'>
	  	Home
	  </Link>
	  <Link className='px-4 text-amber-600 text-lg font-bold' to='/about'>
		About
	  </Link>
	</div>
  )
}

export default NavBar
