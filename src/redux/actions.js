import { ADD_TODO, REMOVE_TODO, DONE_TODO } from "./actionTypes";

let nextTodoId = Math.random();

export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})

export const removeTodo = id => ({
    type: REMOVE_TODO,
    payload: {
        id
    }
})

export const doneTodo = id => ({
    type: DONE_TODO,
    payload: {
        id
    }
})