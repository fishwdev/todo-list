import React from "react";
import {TextField} from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function EditTodoForm(props) {
    const {id, existingTask, editTodo, setIsEditing} = props;
    const [task, handleInputChange, resetInput] = useInputState(existingTask);

    const handleSubmit = (e) => {
        e.preventDefault();
        editTodo(id, task);
        resetInput();
        setIsEditing();
    }

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                marginLeft: '3rem',
                width: '85%'
            }}
        >
            <TextField
                margin='normal'
                value={task}
                onChange={handleInputChange}
                autoFocus
                fullWidth/>
        </form>
    )
}

export default EditTodoForm;