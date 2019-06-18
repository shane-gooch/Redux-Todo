import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return(
        <div>
            {props.todos.map(todo => {
                return(
                    <div key={todo.id}>
                        <Todo todos={todo}/>
                    </div>
                )
            })} 
        </div>
    )
}

export default TodoList;