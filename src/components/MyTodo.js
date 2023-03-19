import React from 'react';

const MyTodo = (props) => {
    const { todo, toggleComplete, removeTodo } = props

    const handleCheckbox=()=> {
        toggleComplete(todo.id);
    }

    const handleRemoveTodo=()=> {
        removeTodo(todo.id);
    }
    return (
        <div className="my-todo">
            <input className="complete-button" type="checkbox" onClick={handleCheckbox} />
            <div className="todo">
                <li className="todolist" style={{ textDecoration: todo.completed ? 'line-through' : null }}> {todo.task}</li>
            </div>
            <button className="delete-button" onClick={handleRemoveTodo}>X</button>
        </div>
    );
}

export default MyTodo;