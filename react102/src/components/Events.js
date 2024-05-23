import React, { useState } from 'react'

const Events = () => {
	const [count, setCount] = useState('')
	const [title, setTitle] = useState()
	const [content, setContent] = useState('')

	const handleEvent = (e) => {
		e.preventDefault()
		if(!title){
			console.log('please input title')
			return
		}

		console.log(title + " " + content)
		console.log(typeof(title))
	}

  return (
	<div>
	  <input type="text" placeholder='text1' value={count} />
	  <br />
	  <input type="text" placeholder='text2' onChange={(e) => setCount(e.target.value)} value={count} />
	  <br />
	  <button onClick={() => { setCount('6') }}>Click me!</button>
	  <br />
	  <form onSubmit={handleEvent}>
		<input type="text" placeholder='text2' onChange={(e) => setTitle(e.target.value)} value={title} />
		<br />
		<input type="text" placeholder='text2' onChange={(e) => setContent(e.target.value)} value={content} />

		<button type='submit' >Click me again!</button>
	   </form>
	</div>
  )
}

export default Events;
