import React from 'react'
import Todo from './Todo';

export default function TodoContainer(props) {
 let { todos, deleteTodos } = props;
  return (
    <div className="todo-container">
      {
        todos.map((todo, i) => <Todo todo={todo} number={i+1} key={i} deleteTodos={deleteTodos}/>)
      }
    </div>
  )
}
