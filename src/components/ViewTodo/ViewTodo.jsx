import React from 'react'
import { useSelector } from 'react-redux'
import TodoTile from '../TodoTile/TodoTile';

function ViewTodo() {

  
    const todos = useSelector(state => state.todos);
    return (
        <div>
           <p className="text-white" style={{fontSize:'large',fontWeight:'bold'}}>TODO : </p>
            {
                todos.map(todo=> {
                    return <TodoTile key={todo.id} data={todo}/>;
                })
            }
        </div>
    )
}

export default ViewTodo
