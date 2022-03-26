// todos
// all methods interact with todos

import React, {createContext} from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
    {id: 1, task: 'Walk dog', isCompleted: false},
    {id: 2, task: 'Wash car', isCompleted: false},
    {id: 3, task: 'Get haircut', isCompleted: false}
]

const TodosContext = createContext();

function TodosProvider(props) {
    const todoStateObj = useTodoState(defaultTodos);
    return (
        <TodosContext.Provider value={todoStateObj}>
            {props.children}
        </TodosContext.Provider>
    );
}

export {TodosContext, TodosProvider};