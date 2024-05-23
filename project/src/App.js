import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Form from "./components/Form";
import LayoutIndex from "./layouts/LayoutIndex";
import ToDopage from "./components/ToDopage";
import ToDodetails from "./components/ToDodetails";
import Login from "./pages/Login.js";
import Register from "./pages/Register";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutIndex />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/workout" element={<ToDopage />} />
                        <Route path="/workout/form" element={<Form />} />
                        <Route
                            path="/workout/:id"
                            element={<ToDodetails />}
                        />
                        <Route path="*" element={<NotFound />} />
                    </Route>
					
                </Routes>
            </BrowserRouter>
        </>
    );
}
