import React, { useState } from 'react';
import './App.css';
import TodoFilter from './Components/TodoFilter';
import TodoContainer from './Components/TodoContainer';
import AddTodo from './Components/AddTodo';

function App() {

  const [todos, setTodos] = useState([{
    completed: true,
    label: "Thing1"
  }, {
    completed: true,
    label: "Thing2"
  }, {
    completed: true,
    label: "Thing3"
  }, {
    completed: true,
    label: "Thing4"
  }]);

  const [shownTodos, setShownTodos] = useState([]);

  const deleteTodos = (index) => {
    const newTodos = todos;
    newTodos.splice(index, 1);
    setTodos([...newTodos]);
  }

  const filterTodos = (query) => {
    // console.log(todos.filter((todo) => todo.label))
    let filteredList = todos.filter((todo) => todo.label.includes(query))
    setShownTodos([...filteredList]);
    console.log(shownTodos)
  }

  return (
    <div className="App">
      <div className="todo-box-container">
        <h3>Todo List</h3>
        <TodoFilter filterTodos={filterTodos} />
        <TodoContainer todos={shownTodos.length ? shownTodos : todos} deleteTodos={deleteTodos} />
        <h4>Add Your Todo</h4>
        <AddTodo />
      </div>
    </div>
  );
}

export default App;
