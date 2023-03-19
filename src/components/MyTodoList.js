import React from 'react';
import MyTodo from './MyTodo'

const MyTodoList = (props)=> {
    const {myTodos, toggleComplete, removeTodo } = props

    return(
        <ul>
            {myTodos.map(todo =>(
                <MyTodo key={todo.id} todo={todo} 
                toggleComplete={toggleComplete}
                removeTodo = {removeTodo} />
            ) )}
        </ul>
    )
}

export default MyTodoList;