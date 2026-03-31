import React from 'react'

const Todo = ({todo, todos, setTodos,id}) => {

    const onchangedit = () => {}
  return (
    <div className='todo-li'>
        <li className="list-li">
            <input className='li-input' value={todo.name} onChange={onchangedit}/>
            <button className='button-complete'>
                <span className='text-complete'>Complete</span><i className='fa fa-check'></i>
            </button>

            <button className='button-edit'>
                <span className='text-edit'>Edit</span><i className='fa fa-edit'></i>
            </button>

            <button className='button-delete'>
                <span className='text-delete'>Delete</span><i className='fa fa-trash'></i>
            </button>
        </li>
      
    </div>
  )
}

export default Todo
