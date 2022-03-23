import React, {useEffect} from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";
import {AppBar, Grid, Paper, Toolbar, Typography} from "@material-ui/core";

function TodoApp() {

    const defaultTodos = [
        {id: 1, task: 'Walk dog', isCompleted: false},
        {id: 2, task: 'Wash car', isCompleted: false},
        {id: 3, task: 'Get haircut', isCompleted: false}
    ]

    const localTodos = JSON.parse(window.localStorage.getItem('todos')) || defaultTodos;

    const {todos, addTodo, editTodo, toggleCompleted, removeTodo} = useTodoState(localTodos);

    useEffect(() => {
        window.localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


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
                    <TodoList
                        todos={todos}
                        editTodo={editTodo}
                        removeTodo={removeTodo}
                        toggleCompleted={toggleCompleted}
                    />
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