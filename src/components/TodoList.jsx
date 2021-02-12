import React from "react";
import { connect } from "react-redux";
import Todo from './Todo'

const TodoList = ({ todos }) => {
    return  (
        <ul className="todo-list">
          {todos && todos.length
            ? todos.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo} />;
              })
            : "No todos, yay!"}
        </ul>
    )
}


const mapStateToProps = state => {
    let todos = state.allIds
    return { todos }
};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);