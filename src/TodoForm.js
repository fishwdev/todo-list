import React from "react";
import {Paper, TextField} from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function TodoForm(props) {
    const [task, handleInputChange, resetInput] = useInputState('');
    const {addTodo} = props;

    return (
        <Paper>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    addTodo(task);
                    resetInput();
                }}
            >
                <TextField value={task} onChange={handleInputChange}/>
            </form>
        </Paper>
    );
}

export default TodoForm;