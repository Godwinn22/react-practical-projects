import { useEffect, useState } from "react";
import TodoData from "../components/TodoData";
import Form from "../components/Form";

const Home = () => {

    return (
        <div className="flexContain">
            <TodoData />
			<Form />
        </div>
    );
};
export default Home;
