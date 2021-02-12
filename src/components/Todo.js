import React from "react"
import { connect } from "react-redux"
import { removeTodo, doneTodo } from "../redux/actions"

const Todo = ({todo, removeTodo, doneTodo}) => {

    const handleDone = (id) => {

        return doneTodo(id)
    }

    return (
        <div className={todo.done ? 'todo done' : 'todo'}>
            <span className='done-hand'>{todo.done ? "👌" : "👋"}{" "}</span>
            <span onClick={() => handleDone(todo.id)}>{todo.content}</span>
            <span className='close' onClick={() => removeTodo(todo.id)}>X</span>
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