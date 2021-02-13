import { ADD_TODO, REMOVE_TODO, DONE_TODO, SHOW_DONE_TODO, RETURN_DONE_TODO } from "./actionTypes";

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

export const allDoneTodo = () => ({
    type: SHOW_DONE_TODO,
})

export const returnDoneTodo = () => ({
    type: RETURN_DONE_TODO,
})
