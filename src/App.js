import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import MyTodoList from './components/MyTodoList';
import { RiTodoLine } from 'react-icons/ri';
import './App.css';

const localStorageKey = 'my-todo-list'

function App() {
  const [myTodos, setMyTodos] = useState([]);

  const days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
  const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

    const date = new Date()
    const dayName = days[date.getDay()];
    const monthName = monthNames[date.getMonth()];
    const dateNum = date.getDate();

  useEffect(() => {
    const myTodosStorage = JSON.parse(localStorage.getItem(localStorageKey));
    if (myTodosStorage) {
      setMyTodos(myTodosStorage);
    }

  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(myTodos));
  }, [myTodos]);


  const addTodo=(todo)=> {
    setMyTodos([todo, ...myTodos]);

  }

  const toggleComplete=(id)=> {
    setMyTodos(
      myTodos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  const removeTodo=(id)=> {
    setMyTodos(myTodos.filter(todo => todo.id !==id));
  }

  return (
      <div className="App">
        <div className="todo-icon-container">
          <RiTodoLine className="todo-icon" />
          <h1>My-Todo</h1>
        </div> 
        <p>{dayName}, {monthName} {dateNum}</p> 
          {myTodos.length < 2? <p className="task">{myTodos.length} task</p>: <p className="task">{myTodos.length} tasks</p>}
          <Form addTodo={addTodo} />
          <MyTodoList myTodos={myTodos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </div>
      )
}
export default App;
