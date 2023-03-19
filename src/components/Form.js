import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'

const Form = ({addTodo})=> {
    const [myTodo, setMyTodo] = useState({
    id: '',
    task: '',
    completed: false
    });

    const handleInputChange = (e)=> {
        setMyTodo({...myTodo, task: e.target.value})
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (myTodo.task.trim()) {
           addTodo({...myTodo, id: uuid()}); 
           setMyTodo({...myTodo, task: ""});
        }

    }

    return (
        <form onSubmit ={handleSubmit}>
            <input className="todo-form" name='task' type='text' value={myTodo.task} onChange={handleInputChange} placeholder="what we have to do?" />
            <div className="add-todo-button">
            <button className="submit-button" type='submit'>Add Todo</button>
            </div>
        </form>
    );   

        
}

export default Form;