import React from "react";
import {Divider, List, Paper} from "@material-ui/core";
import Todo from "./Todo";

function TodoList(props) {
    const {removeTodo, toggleCompleted} = props;

    return (
        <Paper>
            <List>
                {props.todos.map(todo => (
                    <>
                        <Todo
                            task={todo.task}
                            key={todo.id}
                            id={todo.id}
                            isCompleted={todo.isCompleted}
                            removeTodo={removeTodo}
                            toggleCompleted={toggleCompleted}
                        />
                        <Divider/>
                    </>
                ))}
            </List>
        </Paper>
    );
}

export default TodoList;