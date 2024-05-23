// import { useState } from "react";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useTodoDataContext } from "../api_hook/useTodoDataContext";
import { Link, useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns/formatDistanceToNow";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useDelete from "../hooks/useDelete";

const TodoData = () => {

	const { DeleteHandler } = useDelete("http://localhost:8000/workout_data/")

	const navigate = useNavigate(); 

    const { todo } = useTodoDataContext();

    const { fetchHandle } = useFetch("http://localhost:8000/workout_data");

    useEffect(() => {
        fetchHandle();
    }, []);

	const handleDelete = (id) => {
        // console.log(id);
        DeleteHandler(id);
    };

	function handleUpdate(id) {
        // setId(id);
		navigate(`/workout/${id}`)
    }

    useEffect(() => {
        console.log(todo);
    }, [todo]);
    return (
        <>
            <div className="w-full flex flex-col">
                <div className="w-full flex mt-7  justify-center items-center">
                    <Link
                        to="/create"
                        className=" bg-green-500 px-5 py-3 rounded-md text-white mx-8 transition hover:bg-green-800 hover:text-gray-400"
                    >
                        Create new Todo
                    </Link>
                </div>
                {todo?.length > 0 ? (
                    <>
                        <div className="main">
                            {todo.map((all, index) => (
                                <div key={all.id} className="lesson">
                                    <Link to={`/workout/${all.id}`}>
                                        <i>S/N {index + 1}</i>
                                        <h1>
                                            <span>Todo:</span> {all?.category}
                                        </h1>
                                        {/* <p>
										<span>Workout Name:</span>{" "}
										{all?.workout}
									</p> */}
                                    </Link>
                                    <div className=" w-full flex flex-row justify-between items-center">
                                        <div className="flex justify-start">
                                            <span className=" whitespace-pre">
                                                Added :{" "}
                                            </span>
                                            {formatDistanceToNow(
                                                new Date(all?.updatedAt),
                                                { addSuffix: true }
                                            )}
                                        </div>
                                        <div className="flex justify-end">
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
export default TodoData;
