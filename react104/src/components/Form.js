import React, { useEffect, useState } from "react";
import usePost from "../hooks/usePost";

const Form = ({ load, setLoad }) => {
    // invoking the usestate
    const [formData, setFormData] = useState({
        category: "",
        workout: "",
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
        const { category, workout } = formData;
        if (category && workout) {
            postHandle(category, workout, setLoad);
        } else {
            alert("Please fill in all fields");
        }
    };
    return (
        <div>
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
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
