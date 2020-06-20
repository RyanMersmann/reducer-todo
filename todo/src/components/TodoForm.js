import React, { useReducer, useState } from "react";

import { Reduce, InitialState } from "../reducers/UseReducer";
import ToDoList from "./ToDoList";

// STEP 3 Build Form
function ToDoForm() {
    //STEP 2: setup state in your component
    //use reducerHook
    //
  const [state, dispatch] = useReducer(Reduce, InitialState);
  const [item, setItem] = useState("");

  const handleChanges = (e) => {
    // console.log("handle changes", e.target.value);
    setItem(e.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_TODO", payload: item });
    setItem("");
  };
//Toggle Complete
  const toggleComplete = (ID) => {
    // console.log("toggle:", props.item.id);
    dispatch({ type: "TOGGLE_COMPLETE", payload: ID });
  };

  return (
    <section className="inputForm">
      <form onSubmit={addItem}>
        <label htmlFor="item">Enter Task</label>
        <input type="text" name="item" value={item} onChange={handleChanges} />
        <button className="addItem">Add Task</button>
      </form>
      <ToDoList
        item={state.toDoItems}
        dispatch={dispatch}
        toggle={toggleComplete}
      />
    </section>
  );
}

export default ToDoForm;