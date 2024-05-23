// import { useState } from "react";
import { useEffect, useState } from "react";
import Booklist from "./Booklist";
import useFetch from "../hooks/useFetch";

  

const Bookdata = ({load, setLoad}) => {
	const [time, setTime] = useState(0);
	
	const [data, setData] = useState(null);

	const { fetchHandle } =  useFetch('http://localhost:8000/book_items')

	useEffect(() => {
		fetchHandle(setData)
	}, [load])

	return (
		<>
			<h1>My Book List</h1>
			{/* <h2> {time} </h2> */}
			<Booklist data={data} />
		</>
	)
}
export default Bookdata;