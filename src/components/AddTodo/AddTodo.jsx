import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../../actions';
import { v4 as uuidv4 } from 'uuid';
import './AddTodo.css'

function AddTodo() {

    const dispatch = useDispatch();

    const [todo, settodo] = useState('');
    const addTodo = () => {

        if (!todo.length > 0) return;

        let todoObj = {
            id: uuidv4(),
            text: todo,
            isComplete: false
        }
        dispatch(addTodoAction(todoObj));
        settodo('');
    }
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    }

    return (
        <div>
            <p className="text-white add-header">Add Item</p>
            <div className="input-group mb-3">
                <input className="form-control" type='text' value={todo} onKeyDown={handleKeyPress} onChange={(e) => {
                    settodo(e.target.value)
                }} />
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button" onClick={addTodo}>Button</button>
                </div>
            </div>
        </div>


        //         <div>
        //             <p className="text-white add-header">Add Item</p>


        //                     <inputclassName="form-control" type='text' value={todo} onKeyDown={handleKeyPress} onChange={(e) => {
        //                         settodo(e.target.value)
        //                     }} />
        //                <div className="input-group-append">
        //     <button className="btn btn-secondary" type="button" onClick={addTodo}>Add</button>
        //   </div>


        //         </div>
        // <div className='todo-add'>



        // </div>
    )
}

export default AddTodo
