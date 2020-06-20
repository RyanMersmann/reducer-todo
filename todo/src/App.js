import React from "react";
import "./App.css";

import ToDoForm from "./components/TodoForm";

function App() {
  return (
    <div className="app-container">
      <h2>To Do Reducer App</h2>
      <ToDoForm />
    </div>
  );
}

export default App;