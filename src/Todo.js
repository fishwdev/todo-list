import React from "react";
import {Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Todo(props) {
    const {id, task, isCompleted, removeTodo, toggleCompleted} = props;
    return (
        <ListItem>
            <IconButton onClick={() => removeTodo(id)} aria-label='Delete'>
                <DeleteIcon/>
            </IconButton>
            <ListItemText style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
                {task}
            </ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label='Edit'>
                    <EditIcon/>
                </IconButton>
                <Checkbox checked={isCompleted} tabIndex={-1} onClick={() => toggleCompleted(id)}/>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

export default Todo;