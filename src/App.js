import React, { useState, useEffect } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import { Input, InputLabel, FormControl } from "@material-ui/core";
import { Todo } from "./components/Todo";
import database from "./firebase";
import firebase from "firebase";
function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  // fetching data from firebase

  useEffect(() => {
    database
      .collection("todos")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setTodo(snapshot.docs.map((doc) => doc.data().todo));
      });
  }, [input]);

  //Adding todo items

  const addTodo = (e) => {
    e.preventDefault();

    //below lines are pusing code to database
    database.collection("todos").add({
      todo: input,
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    // below line is adding items locally(statically)
    // setTodo([...todo, input]);
    setInput(""); //clear the input after hit submit
  };

  return (
    <div className="App">
      <h1>React + Firebase todo App 💯😁 </h1>

      <FormControl>
        <InputLabel>🛩 Write a Task</InputLabel>
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </FormControl>
      <br />
      <br />
      <Button
        onClick={addTodo}
        disabled={!input}
        variant="contained"
        color="primary"
      >
        Save Task
      </Button>

      <ul>
        {todo.map((todo, index) => (
          <Todo id={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
