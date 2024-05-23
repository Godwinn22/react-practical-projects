// import { useState } from "react";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import ToDopage from "./ToDopage";

const ToDodata = ({ load, setLoad, id, setId }) => {
    const [data, setData] = useState(null);

    const { fetchHandle } = useFetch("http://localhost:8000/workout_data");

    useEffect(() => {
        fetchHandle(setData);
    }, [load]);

    return (
        <>
            <ToDopage
                id={id}
                setId={setId}
                setLoad={setLoad}
                load={load}
                data={data}
            />
        </>
    );
};
export default ToDodata;
