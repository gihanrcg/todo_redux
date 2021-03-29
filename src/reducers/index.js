import { combineReducers } from "redux";
import todoReducer from "./Todo";

const consolidatedReducer = combineReducers(
    {
        todos : todoReducer
    }
)

export default consolidatedReducer;