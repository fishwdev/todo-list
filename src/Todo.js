import React, {memo, useContext} from "react";
import useToggleState from "./hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";
import {Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import {TodosDispatchContext} from "./contexts/todos.context";

function Todo(props) {
    const [isEditing, setIsEditing] = useToggleState(false);
    const {id, task, isCompleted} = props;
    const todoDispatch = useContext(TodosDispatchContext);

    console.log(`Todo ${id} rendered`);

    return (
        <ListItem style={{height: '64px'}}>
            {isEditing ?
                <EditTodoForm id={id} existingTask={task} setIsEditing={setIsEditing}/> :
                (
                    <>
                        <IconButton onClick={() => todoDispatch({type: 'REMOVE', todoId: id})} aria-label='Delete'>
                            <DeleteIcon/>
                        </IconButton>
                        <ListItemText style={{textDecoration: isCompleted ? 'line-through' : 'none'}}>
                            {task}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton onClick={setIsEditing} aria-label='Edit'>
                                <EditIcon/>
                            </IconButton>
                            <Checkbox checked={isCompleted} tabIndex={-1} onClick={() => todoDispatch({type: 'TOGGLE', todoId: id})}/>
                        </ListItemSecondaryAction>
                    </>
                )
            }
        </ListItem>
    );
}

export default memo(Todo);