import React, {useState} from "react";
import uuid from 'uuid/v4';
import {AppBar, Grid, Paper, Toolbar, Typography} from "@material-ui/core";
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
        setTodos([...todos, {id: uuid(), task: newTask, isCompleted: false}])
    };

    const toggleCompleted = (tudoID) => {
        setTodos(todos.map(todo => (
            todo.id === tudoID ? {...todo, isCompleted: !todo.isCompleted} : todo
        )))
    };

    const removeTodo = (tudoID) => {
        // filter out the target ID
        // setTodos
        setTodos(todos.filter(todo => (
            todo.id !== tudoID
        )))
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
            <Grid container justifyContent='center'>
                <Grid item xs={10} md={8} lg={10} style={{marginTop: '3rem'}}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList todos={todos} removeTodo={removeTodo} toggleCompleted={toggleCompleted}/>
                </Grid>
            </Grid>
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