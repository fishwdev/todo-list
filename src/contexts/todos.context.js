import React, {createContext, useReducer} from "react";
import TodosReducer from "../reducers/todos.reducer";

const defaultTodos = [
    {id: 1, task: 'Walk dog', isCompleted: false},
    {id: 2, task: 'Wash car', isCompleted: false},
    {id: 3, task: 'Get haircut', isCompleted: false}
]

const TodosContext = createContext();
const TodosDispatchContext = createContext();

function TodosProvider(props) {
    const [todos, todoDispatch] = useReducer(TodosReducer, defaultTodos);
    return (
        <TodosContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={todoDispatch}>
                {props.children}
            </TodosDispatchContext.Provider>
        </TodosContext.Provider>
    );
}

export {TodosContext, TodosProvider};
export {TodosDispatchContext};