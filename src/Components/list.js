import React from 'react'
import Todo from './Todo'

const list = ({todos, setTodos}) => {
  return (
    <div className='todo-ul'>
        <ul>
            {todos.map((todo) => (
                <Todo
                key={todo.id}
                id={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
                />
            ))}
        </ul>
    </div>
  )
}

export default list