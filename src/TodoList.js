import React from "react";
import {Divider, List, Paper} from "@material-ui/core";
import Todo from "./Todo";

function TodoList(props) {
    const {todos, editTodo, removeTodo, toggleCompleted} = props;

    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, idx) => (
                        <>
                            <Todo
                                {...todo}
                                key={todo.id}
                                editTodo={editTodo}
                                removeTodo={removeTodo}
                                toggleCompleted={toggleCompleted}
                            />
                            {(idx < todos.length - 1) && <Divider/>}
                        </>
                    ))}
                </List>
            </Paper>
        );
    return null;
}

export default TodoList;