import React, { useContext, useState } from "react";
import { todosContext } from "./context";

function Form() {
  const [value, setvalue] = useState("");
  const handleValue = (e) => {
    setvalue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addToDo(value);
  };
  const { addToDo } = useContext(todosContext);
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="type something to add todos"
        value={value}
        onChange={handleValue}
        className="todos-text"
      />
      <button type="submit" className="todos-button">
        add to do
      </button>
    </form>
  );
}

export default Form;
