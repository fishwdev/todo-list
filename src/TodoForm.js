import React from "react";
import {Paper, TextField} from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function TodoForm(props) {
    const [task, handleInputChange, resetInput] = useInputState('');
    const {addTodo} = props;

    return (
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo(task);
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