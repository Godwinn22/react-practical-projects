import React, { useEffect, useState } from 'react'
import usePost from '../hooks/usePost'

const Form = ({load, setLoad}) => {
	// invoking the usestate

	const [formData, setFormData] = useState({
		title:'',
		content:'',
		author:''
	})

	const handleInputChange = (e) => {
		setFormData({...formData, [e.target.name]: e.target.value })

	}

	useEffect(() => {
		console.log(formData)
	}, [formData])

	const { postHandle } = usePost('http://localhost:8000/book_items');

	const handleSubmit = (e) => {
		e.preventDefault();
		const { title, content, author } = formData;
		if (title && content && author) {
			postHandle(title, content, author, setLoad)
		}
		else{
			alert("Please fill in all fields")
		}
	};
  return (
	<div>
	  <form onSubmit={handleSubmit}>
		<div>
			<label htmlFor="title">Title:</label><br />
			<input onChange={handleInputChange} type="text" id='title' name='title' value={formData.title} />
		</div>
		<div>
			<label htmlFor="content">Content:</label><br />
			<input onChange={handleInputChange} type="text" id='content' name='content' value={formData.content} />
		</div>
		<div>
			<label htmlFor="author">Author:</label><br />
			<input onChange={handleInputChange} type="text" id='author' name='author' value={formData.author} />
		</div>
		<div>
			<button type='submit'>Submit</button>
		</div>
	  </form>
	</div>
  )
}

export default Form
