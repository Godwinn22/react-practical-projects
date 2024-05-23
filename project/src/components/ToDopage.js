import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDelete from "../hooks/useDelete";
import useUpdate from "../hooks/useUpdate";

const ToDopage = ({data, setLoad, load,  id, setId}) => {
    const { DeleteHandler } = useDelete("http://localhost:8000/workout_data/");

    const handleDelete = (id) => {
        // console.log(id);
        DeleteHandler(id, setLoad);
    };

    function handleUpdate(id) {
        setId(id);
    }

    return (
        <>
            <div className="w-full flex flex-col">
                <div className="w-full flex mt-7 items-center">
                    <Link
                        to="/workout/form"
                        className=" bg-green-500 px-5 py-3 rounded-md text-white mx-5 transition hover:bg-green-800 hover:text-gray-400"
                    >
                        Create new workout
                    </Link>
                </div>
                {data?.length > 0 ? (
                    <>
                        <div className="main">
                            {data.map((all, index) => (
                                <div key={all.id} className="lesson">
                                    <Link to={`/workout/${all.id}`}>
                                        <i>S/N {index + 1}</i>
                                        <h1>
                                            <span>Workout Category:</span>{" "}
                                            {all?.category}
                                        </h1>
                                        <p>
                                            <span>Workout Name:</span>{" "}
                                            {all?.workout}
                                        </p>
                                    </Link>
                                    <div className=" w-full flex flex-row justify-end items-center">
                                        <FaEdit
                                            onClick={() =>
                                                handleUpdate(all?.id)
                                            }
                                            className="text-blue-500 text-xl px-1 hover:text-blue-700"
                                        />
                                        <FaTrashAlt
                                            onClick={() =>
                                                handleDelete(all?.id)
                                            }
                                            // onClick={handleDelete}
                                            className="text-red-500 text-xl px-1 hover:text-red-700"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="lesson">No content</div>
                )}
            </div>
        </>
    );
};

export default ToDopage;
