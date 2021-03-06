import React, {useContext} from "react";
import {Paper, TextField} from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import {TodosDispatchContext} from "./contexts/todos.context";

function TodoForm() {
    console.log('TodoForm rendered');
    const [task, handleInputChange, resetInput] = useInputState('');
    const todoDispatch = useContext(TodosDispatchContext);

    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    todoDispatch({type: 'ADD', task: task});
                    resetInput();
                }}
            >
                <TextField
                    value={task}
                    onChange={handleInputChange}
                    margin='normal'
                    label='Add new task'
                    fullWidth
                />
            </form>
        </Paper>
    );
}

export default TodoForm;