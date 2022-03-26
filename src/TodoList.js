import React, {useContext} from "react";
import {Divider, List, Paper} from "@material-ui/core";
import Todo from "./Todo";
import {TodosContext} from "./contexts/todos.context";

function TodoList() {
    console.log('TodoList rendered');
    const todos = useContext(TodosContext);

    if (todos.length)
        return (
            <Paper>
                <List>
                    {todos.map((todo, idx) => (
                        <React.Fragment key={idx}>
                            <Todo
                                {...todo}
                                key={todo.id}
                            />
                            {(idx < todos.length - 1) && <Divider/>}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        );
    return null;
}

export default TodoList;