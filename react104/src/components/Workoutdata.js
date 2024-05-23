// import { useState } from "react";
import { useEffect, useState } from "react";
import Workoutpage from "./Workoutpage";
import useFetch from "../hooks/useFetch";

  

const Workoutdata = ({load, setLoad}) => {
	
	const [data, setData] = useState(null);

	const { fetchHandle } =  useFetch('http://localhost:8000/workout_data')

	useEffect(() => {
		fetchHandle(setData)
	}, [load])

	return (
		<>
			<Workoutpage data={data} />
		</>
	)
}
export default Workoutdata;