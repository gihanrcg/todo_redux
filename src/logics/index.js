export const addTodoLogic =(state,action) => {
    if(Array.isArray(state)){            
        return [...state,action.payload];
    }      
}

export const markCompleteTodoLogic = (state,action) => {
    if(Array.isArray(state)){
        let data = state.map(todo=> {
            if(todo.id === action.payload)
                return Object.assign({},todo,{isComplete: !todo.isComplete})
            return todo;
        });
        return data;
    }
}

export const removeTodoItemLogic = (state,action) => {
    if(Array.isArray(state)){
         return state.filter(todo => todo.id !== action.payload);         
    }
}