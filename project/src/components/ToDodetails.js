import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchById from "../hooks/useFetchById";
import { FaEdit, FaTrash, FaTrashAlt } from "react-icons/fa";
import { Box, Text } from "@chakra-ui/react";

const ToDodetails = () => {
    const { id } = useParams();

    const { fetchIdHandler, singleData } = useFetchById(
        `http://localhost:8000/workout_data/${id}`
    );

    useEffect(() => {
        fetchIdHandler();
    }, [id]);

    return (
        <div className="lesson">
            <h1>
                <span>Title: </span>
                {singleData?.workout}
            </h1>
            <p>
                <span>Category: </span>
                {singleData?.category}
            </p>
            <p>
                <span>Description: </span>
                {singleData?.description}
            </p>
        </div>
    );
};

export default ToDodetails;
