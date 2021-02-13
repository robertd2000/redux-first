import React from "react"
import { connect } from "react-redux"
import { removeTodo, doneTodo } from "../redux/actions"

const Todo = ({todo, removeTodo, doneTodo}) => {

    const handleDone = (id) => {

        return doneTodo(id)
    }

    let doneItem = <span className='doneItem'>✔</span>
    let circleItem = <span className='circleItem'>&#9675;</span>


    return (
        <div className={todo.done ? 'todo done' : 'todo'}>
            <span onClick={() => handleDone(todo.id)}>
                <span className='done-hand'>{todo.done ? doneItem : circleItem}{" "}</span>
                <span className='todoItem'>{todo.content}</span>
            </span>

            <span className='close' onClick={() => removeTodo(todo.id)}>✖</span>
            <hr/>
        </div>
    )
}

const mapStateToProps = state => {
    let done = state.allIds.map(i => i.done)
    return {done}
};

export default connect(
    mapStateToProps,
    {removeTodo, doneTodo}
)(Todo)