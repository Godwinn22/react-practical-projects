import { useState } from "react";
import Workoutdata from "../components/Workoutdata";
import Form from "../components/Form";
// import Workoutpage from "./components/Workoutpage";

const Home = () => {
    const [load, setLoad] = useState(false);

    return (
        <div className="flexContain">
            <Workoutdata load={load} setLoad={setLoad} />
            <Form load={load} setLoad={setLoad} />
        </div>
    );
};
export default Home;
