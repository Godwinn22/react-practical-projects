import { useEffect, useState } from "react";
import ToDodata from "../components/ToDodata";
// import Form from "../components/Form";
import UpdateForm from "../components/UpdateForm";
// import Workoutpage from "./components/Workoutpage";

const Home = () => {
    const [load, setLoad] = useState(false); // keeping track of out data flow
    const [id, setId] = useState("");

    // useEffect(() => {
    //     console.log(id);
    // }, [id]);

    const [formUpdateData, setFormUpdateData] = useState({
        category: "",
        workout: "",
        description: "",
    });
    // invoking usestate stops

    const handleInputChange = (e) => {
        setFormUpdateData({
            ...formUpdateData,
            [e.target.name]: e.target.value,
        });

        console.log(formUpdateData);
    };

    return (
        <div className="flexContain">
            <ToDodata id={id} setId={setId} load={load} setLoad={setLoad} />
            {/* <Form load={load} setLoad={setLoad} /> */}
            {/* <UpdateForm id={id} setId={setId} load={load} setLoad={setLoad} /> */}
        </div>
    );
};
export default Home;
