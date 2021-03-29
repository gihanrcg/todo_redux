import { ADD_TODO_ACTION, MARK_COMPLETE_TODO, REMOVE_TODO } from "../Constants/ActionConstants"

export const addTodoAction =(todo) => {
    return {
        type : ADD_TODO_ACTION,
        payload : todo
    }
}
export const markCompleteTodoAction = (id) => {
    return {
        type : MARK_COMPLETE_TODO,
        payload : id
    }
}

export const removeTodoAction = (id) => {
    return {
        type : REMOVE_TODO,
        payload : id
    }
}