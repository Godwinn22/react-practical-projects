import React, { useEffect, useState } from "react";
import usePost from "../hooks/usePost";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Form = () => {
    const navigate = useNavigate();
    // invoking the usestate
    const [formData, setFormData] = useState({
        category: "",
        workout: "",
        description: "",
    });
    // invoking usestate stops

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });

        console.log(formData);
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const { postHandle } = usePost("http://localhost:8000/workout_data");

    const handleSubmit = (e) => {
        e.preventDefault();
        const { category, workout, description } = formData;
        if (category && workout && description) {
            postHandle(category, workout, description);
        } else {
            alert("Please fill in all fields");
            return;
        }
        navigate("/");
    };
    return (
        <div>
			{/* <div className="w-full flex justify-start">
				<FaArrowLeft onClick={() => navigate(-1)} className=" text-blue-950"/>
			</div> */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="category">Category:</label>
                    <br />
                    <input
                        onChange={handleInputChange}
                        type="text"
                        id="category"
                        name="category"
                        value={formData.category}
                    />
                </div>
                <div>
                    <label htmlFor="workout">Workout:</label>
                    <br />
                    <input
                        onChange={handleInputChange}
                        type="text"
                        id="workout"
                        name="workout"
                        value={formData.workout}
                    />
                </div>
                <div>
                    <label htmlFor="description">Workout:</label>
                    <br />
                    <textarea
                        cols="30"
                        rows="8"
                        onChange={handleInputChange}
                        type="text"
                        id="description"
                        name="description"
                        value={formData.description}
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="py-3 px-7 rounded-xl bg-green-600 hover:bg-green-800 my-3 text-white font-semibold transition duration-700"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
