import React, { useState } from 'react'

export default function Todo(props) {
  let {todo, number, deleteTodos} = props

  const [taskCompleted, setTaskCompleted] = useState(false);

  return (
    <div className="todo">
      <span>{number}.</span>
      {taskCompleted ? null : <button onClick={() => setTaskCompleted(true)}>complete</button>}
      <span className="todo-label" style={taskCompleted ? {textDecoration: "line-through"} : null} onClick={()=> setTaskCompleted(false)}>{todo.label}</span>
      <button onClick={()=>deleteTodos(number - 1)}>X</button>
    </div>
  )
}
