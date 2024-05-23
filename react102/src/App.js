import { useState } from "react";
import Bookdata from "./components/Bookdata";
// import Events from "./components/Events";
import Form from "./components/Form";

const App = () => {
	const [ load, setLoad ] = useState(false)

	return(
		<div>
			<Form load={load} setLoad={setLoad}/>
			<Bookdata load={load} setLoad={setLoad}/>
		</div>
	);
}
export default App;