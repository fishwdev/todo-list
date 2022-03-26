import React from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import {AppBar, Grid, Paper, Toolbar, Typography} from "@material-ui/core";
import {TodosProvider} from "./contexts/todos.context";

function TodoApp() {
    console.log('TodoApp rendered');
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
                    <TodosProvider>
                        <TodoForm/>
                        <TodoList/>
                    </TodosProvider>
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