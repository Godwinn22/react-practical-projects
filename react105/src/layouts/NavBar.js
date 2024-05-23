import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
	<div className='w-full py-4 bg-white flex justify-center'>
	  <Link className='px-6 text-amber-600 text-lg font-bold' to='/'>
	  	Home
	  </Link>
	  <Link className='px-6 text-amber-600 text-lg font-bold' to='/register'>
		Register
	  </Link>
	  <Link className='px-6 text-amber-600 text-lg font-bold' to='/login'>
		Login
	  </Link>
	</div>
  )
}

export default NavBar
