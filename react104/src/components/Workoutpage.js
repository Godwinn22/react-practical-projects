import React from "react";

const Workoutpage = ({ data }) => {
    return (
        <>
            {data?.length > 0 ? (
                <>
                    <div className="main" >
                        {data.map((all, index) => (
                            <div key={all.id} className="lesson">
                                <i>S/N {index + 1}</i>
                                <h1>
                                    <span>Workout Category:</span>{" "}
                                    {all?.category}
                                </h1>
                                <p>
                                    <span>Workout Name:</span> {all?.workout}
                                </p>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <div className="lesson">No content</div>
            )}
        </>
    );
};

export default Workoutpage;
