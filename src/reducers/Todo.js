import { ADD_TODO_ACTION, MARK_COMPLETE_TODO, REMOVE_TODO } from "../Constants/ActionConstants";
import { addTodoLogic, markCompleteTodoLogic, removeTodoItemLogic } from "../logics";

const todoReducer = (state = [], action) => {
  switch (action.type) {

    case ADD_TODO_ACTION: {
      return addTodoLogic(state,action);        
    }

    case MARK_COMPLETE_TODO : {
      return markCompleteTodoLogic(state,action)
    }

    case REMOVE_TODO : {
      return removeTodoItemLogic(state,action)
    }
      
    default:
      return state;
  }
};

export default todoReducer;
