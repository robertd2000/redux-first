import { connect } from "react-redux"
import { removeTodo } from "../redux/actions"

const Todo = ({todo, removeTodo}) => {
    return (
        <div>
            {todo.content} <span onClick={() => removeTodo(todo.id)}>X</span>
        </div>
    )
}

export default connect(
    null,
    {removeTodo}
)(Todo)