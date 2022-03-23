import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import {Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

function Todo(props) {
    const [isEditing, setIsEditing] = useToggleState(false);
    const {id, task, isCompleted, editTodo, removeTodo, toggleCompleted} = props;

    return (
        <ListItem style={{height: '64px'}}>
            {isEditing ?
                <EditTodoForm id={id} existingTask={task} editTodo={editTodo} setIsEditing={setIsEditing}/> :
                    (
                    <>
                        <IconButton onClick={() => removeTodo(id)} aria-label='Delete'>
                            <DeleteIcon/>
                        </IconButton>
                        <ListItemText style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton onClick={setIsEditing} aria-label='Edit'>
                                <EditIcon/>
                            </IconButton>
                            <Checkbox checked={isCompleted} tabIndex={-1} onClick={() => toggleCompleted(id)}/>
                        </ListItemSecondaryAction>
                    </>
                    )}
                </ListItem>
                );
            }

            export default Todo;