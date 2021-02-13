import React from "react";
import { connect } from "react-redux";
import { addTodo, allDoneTodo, returnDoneTodo } from "../redux/actions";

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { input: "" };
    }
    
    updateInput = input => {
        this.setState({input})
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.input)
        this.setState({input: ''})
    }

    showDone = e => {
        console.log(e.target.checked );
        if (e.target.checked === true) {
            this.props.allDoneTodo()
        } else {
            this.props.returnDoneTodo()
        }
    }

    render() {
        return (
            <div className='addTodo'>
                <input
                    className='input'
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
                Done
                <input type="checkbox" className='checkbox' onChange={e => this.showDone(e)}/>
                <hr/>
            </div>
        );
    }
}

export default connect(
    null,
    {addTodo, allDoneTodo, returnDoneTodo}
)(AddTodo)