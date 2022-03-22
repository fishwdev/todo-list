import React, {useState} from "react";
import {AppBar, Paper, Toolbar, Typography} from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {

    const defaultTodos = [
        {id: 1, task: 'Walk dog', isCompleted: false},
        {id: 2, task: 'Wash car', isCompleted: false},
        {id: 3, task: 'Get haircut', isCompleted: false}
    ]
    const [todos, setTodos] = useState(defaultTodos);
    const addTodo = (newTask) => {
        setTodos([...todos, {id: 4, task: newTask, isCompleted: false}])
    };

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: '#fafafa'
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{height: '64px'}}>
                <Toolbar>
                    <Typography color='inherit'>TODOLIST WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <TodoForm addTodo={addTodo}/>
            <TodoList todos={todos}/>
        </Paper>
    );
}

export default TodoApp;

/*
Structure:
    - TodoApp
        -TodoForm
        -TodoList
            -TodoItem

Props / States:
    id, task, isCompleted
 */