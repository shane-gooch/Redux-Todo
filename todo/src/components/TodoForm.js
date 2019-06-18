import React from 'react';

class TodoForm extends React.Component {
    state ={
        newTodo: ''
    }

    addTodo = () => {
        this.props.addTodo(this.state.newTodo)
        this.setState({
            newTodo: ''
        })
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        return(
            <div>
                <form className='todo-form'>
                    <input 
                        type='text'
                        name='newTodo'
                        value={this.state.newTodo}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.addTodo} className='submit-btn' type='button'>Add Todo</button>
                </form>
            </div>
        )
    }
}

export default TodoForm; 