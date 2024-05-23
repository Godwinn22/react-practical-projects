import React from "react";

const Booklist = ({ data }) => {
    return (
        <>
            {data?.length > 0 ? (
                <>
                    {data.map((all, index) => (
                        <div key={all.id} className="lesson">
                            <i>S/N {index + 1}</i>
                            <h1>
                                <span>Book Title:</span> {all?.title}
                            </h1>
                            <p>
                                <span>Book Content:</span> {all?.content}
                            </p>
                            <p>
                                <span>Book Author:</span> {all?.author}
                            </p>
                        </div>
                    ))}
                </>
            ) : (
                <div className="lesson">No content</div>
            )}
        </>
    );
};

export default Booklist;
