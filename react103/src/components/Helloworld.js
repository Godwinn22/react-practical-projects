// Hello world component

// import { useState } from "react";
import Lesson2 from "./Lesson2";

const objArr = [
	{name : "John", surname: "Peter", age:40, id:1},
	{name : "Kola", surname: "Jack", age:20, id:2},
	{name : "Lola", surname: "Ade", age:30, id:3},
	{name : "Monalisa", surname: "Kehinde", age:24, id:4},
	{name : "Ebuka", surname: "Ajoke", age:12, id:5},
	{name : "Simon", surname: "Loki", age:45, id:6},
]

const Helloworld = () => {
	// const [state, setState] = useState("");


	return (
		<>
			<h1>Hello world</h1>
			<Lesson2 data={objArr} />
		</>
	)
}
export default Helloworld;