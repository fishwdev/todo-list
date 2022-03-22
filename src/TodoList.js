import React from "react";
import {Divider, List, ListItem, ListItemText, Paper} from "@material-ui/core";

function TodoList(props) {
    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <>
                        <ListItem>
                            <ListItemText>{todo.task}</ListItemText>
                        </ListItem>
                        <Divider/>
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;