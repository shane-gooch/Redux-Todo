import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { addTodo } from './actions';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm'; 

class App extends React.Component {

  addTodo = todo => {
    this.props.addTodo(todo)
  }

  render(){
    return (
      <div className="App">
        <h1 className='title'>Todo TodoList</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList todos={this.props.todo}/>
      </div>
    );
    }
  }

const mapStateToProps = state => {
  return {
    todo: state.todo
  }
}
export default connect(mapStateToProps, { addTodo })(App)
