import React, {useContext} from "react";
import {TextField} from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import {TodosDispatchContext} from "./contexts/todos.context";

function EditTodoForm(props) {
    console.log('EditTodoForm rendered');
    const {id, existingTask, setIsEditing} = props;
    const [task, handleInputChange, resetInput] = useInputState(existingTask);
    const todoDispatch = useContext(TodosDispatchContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        todoDispatch({type: 'EDIT', todoId: id, task: task});
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