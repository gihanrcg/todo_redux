import React from 'react'
import { useDispatch } from 'react-redux';
import { markCompleteTodoAction, removeTodoAction } from '../../actions';
import './TodoTileStyles.css';




function TodoTile(props) {


    const getStyle = () => {

        return {
            fontSize:'24px',
            textDecoration: props.data.isComplete ? 'line-through' : 'none',
            color: props.data.isComplete ? 'red' : '#046582',
        }
    }

    const dispatch = useDispatch();

    const onCheckBoxChanged = () => {
        dispatch(markCompleteTodoAction(props.data.id))
    }

    const onRemoveButtonCliked = () => {
        dispatch(removeTodoAction(props.data.id))
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-2">
                        <button className="btn btn-success" onClick={() => onCheckBoxChanged()} >{props.data.isComplete ? 'Re-Open' : 'Done'}</button>
                    </div>
                    <div className="col" style={getStyle()}>
                        {props.data.text}
                    </div>
                    <div className="col-2">
                        <button className="btn btn-danger" onClick={() => onRemoveButtonCliked()} >X</button>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default TodoTile

