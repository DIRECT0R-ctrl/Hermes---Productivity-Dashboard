import React, { useState } from 'react'
import Form from './Components/Form';
import list from './Components/list';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="Header">
        <h1>Hermes - Productivity Dashboard</h1>

        <div className="form-container">
          <Form todos={todos} setTodos={setTodos} />
        </div>
        <div><list todos={todos} setTodos={setTodos}/></div>
      </div>
    </div>
  );
}

export default App;