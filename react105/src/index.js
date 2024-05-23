// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./css.css";
import { ChakraProvider } from "@chakra-ui/react";
import { TodoDataContextProvider } from "./context/TodoDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ChakraProvider>
		<TodoDataContextProvider>
			<App />
		</TodoDataContextProvider>
    </ChakraProvider>
);
