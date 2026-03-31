import React, { useState } from 'react'

const Todo = ({ todo, todos, setTodos, id }) => {

    const [edit, setEdite] = useState(false);
    const [inputedite, setInputedite] = useState(todo.name);

    const onEdite = () => {
        setEdite(true);
    }
    const onComplete = () => {
        setTodos(todos.map((item) => {
            if (todo.id === item.id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    }
    const onDelete = () => {
        setTodos(todos.filter((item) =>
            todo.id !== item.id))
    }
    const onchangedit = () => {

        if (edit) {
            
        } else {
            return (
                <div className='todo-li'>
                    <li className={`list-li ${todo.completed ? 'completed' : ''}`}>
                        <input className='li-input' value={todo.name} onChange={onchangedit} />
                        <button className='button-complete' onClick={onComplete}>
                            <span className='text-complete'>Complete</span><i className='fa fa-check'></i>
                        </button>

                        <button className='button-edit' onClick={onEdite}>
                            <span className='text-edit'>Edit</span><i className='fa fa-edit'></i>
                        </button>

                        <button className='button-delete' onClick={onDelete}>
                            <span className='text-delete'>Delete</span><i className='fa fa-trash'></i>
                        </button>
                    </li>

                </div>
            )
        }
    }

}

export default Todo
