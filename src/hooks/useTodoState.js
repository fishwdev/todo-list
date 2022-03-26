import uuid from "uuid/v4";
import {useLocalStorageState} from "./useLocalStorageState";

function useTodoState(initState) {
    const [todos, setTodos] = useLocalStorageState('todos', initState);

    return {
        todos,
        addTodo: (newTask) => {
            setTodos([...todos, {id: uuid(), task: newTask, isCompleted: false}])
        },
        editTodo: (todoID, editedTask) => {
            setTodos(todos.map(todo => (
                todo.id === todoID ? {...todo, task: editedTask} : todo
            )))
        },
        toggleCompleted: (todoID) => {
            setTodos(todos.map(todo => (
                todo.id === todoID ? {...todo, isCompleted: !todo.isCompleted} : todo
            )))
        },
        removeTodo: (todoID) => {
            // filter out the target ID
            // setTodos
            setTodos(todos.filter(todo => (
                todo.id !== todoID
            )))
        }
    }
}

export default useTodoState;