import React, { createContext, useReducer } from "react";

export const TodoDataContext = createContext();

// for todo timetable
export const todoDataReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                todo: action.payload,
            };
        case "SET_DATASET":
            return {
                todo: action.payload,
            };
        case "CREATE_DATA":
            return {
                todo: [action.payload, ...state.todo],
            };
        case "UPDATE_DATA":
            return {
                todo: [action.payload, ...state.todo],
            };
        case "DELETE_DATA":
            return {
                todo: state.todo.filter(
                    (data) => data.id !== action.payload.id
                ),
            };
        default:
            return state;
    }
};

export const TodoDataContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(todoDataReducer, {
        todo: null,
    });

    return (
        <TodoDataContext.Provider value={{ ...state, dispatch }}>
            {children}
        </TodoDataContext.Provider>
    );
};
