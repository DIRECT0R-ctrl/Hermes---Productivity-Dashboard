import React, { useState } from 'react'
import Form from './Components/Form';
import List from './Components/List';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <div className="Header">
        <h1>Hermes - Productivity Dashboard</h1>

        <div className="form-container">
          <Form todos={todos} setTodos={setTodos} />
        </div>
        <div><List todos={todos} setTodos={setTodos}/></div>
      </div>
    </div>
  );
}

export default App;