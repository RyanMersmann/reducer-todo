import React from "react";

function ToDoList(props) {
  console.log("todolist props", props);
  const clearDone = e => {
    e.preventDefault();
    props.dispatch({ type: "CLEAR_COMPLETE" });
  };

  return (
    <div className="todo-container">
      {props.item.map(item => (
        <div className="todo-item">
          <li
            onClick={() => props.toggle(item.id)}
            className={`todo${item.completed ? " done" : ""}`}
            key={item.id}
          >
            To Do: {item.item}
          </li>
        </div>
      ))}
      <button className="clear-button" onClick={clearDone}>
        Clear Done
      </button>
    </div>
  );
}
export default ToDoList;