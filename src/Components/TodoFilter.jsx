import React from 'react'

export default function TodoFilter(props) {
  let { filterTodos } = props
  return (
    <div>
      <input type="text" name="todoFilter" id="todoFilter" className="filter" placeholder="filter your todos" onChange={(e)=>filterTodos(e.target.value)}/>
    </div>
  )
}
