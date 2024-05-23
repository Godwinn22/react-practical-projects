import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
	<div className='w-full items-center flex justify-between px-12 py-5'>
	  <div>
		<h3>Logo</h3>
	  </div>
	  <div className="links flex flex-col">
	  <Link className='px-4 text-amber-600 text-lg font-bold' to='/'>
	  	Home
	  </Link>
	  <Link className='px-4 text-amber-600 text-lg font-bold' to='/about'>
		About
	  </Link>
	  <Link className='px-4 text-amber-600 text-lg font-bold' to='/contact'>
		Contact
	  </Link>
	  <Link className='px-4 text-amber-600 text-lg font-bold' to='/blog'>
		Blog
	  </Link>
	  </div>
	</div>
  )
}

export default Footer
