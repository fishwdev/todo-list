import uuid from "uuid/v4";

const TodosReducer = (state, action) => {
    switch(action.type) {
        // {type: 'ADD', task: 'Walk the dog'}
        case 'ADD':
            return [...state, {id: uuid(), task: action.task, isCompleted: false}];
        // {type: 'EDIT', task: 'Walk the dog', todoID: 1}
        case 'EDIT':
            return state.map(todo => (
            todo.id === action.todoId ? {...todo, task: action.task} : todo
        ));
        // {type: 'TOGGLE', todoID: 1}
        case 'TOGGLE':
            return state.map(todo => (
            todo.id === action.todoId ? {...todo, isCompleted: !todo.isCompleted} : todo
            ));
        // {type: 'REMOVE', todoID: 1}
        case 'REMOVE':
            return state.filter(todo => (todo.id !== action.todoId));
        default:
            return state;
    }
}
export default TodosReducer;