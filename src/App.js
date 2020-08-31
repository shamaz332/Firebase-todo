import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(["let the dog bark"]);
  const [input, setInput] = useState("");

  const addTodo = (e) => {
    setTodo([...todo, input]);
  };

  return (
    <div className="App">
      <h1>React + Firebase todo App 💯😁 </h1>
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Save Task</button>
      <ul>
        {todo.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
