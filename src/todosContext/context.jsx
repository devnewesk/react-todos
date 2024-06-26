import { nanoid } from "nanoid";
import React, { Children } from "react";
import { useState } from "react";
import { createContext } from "react";
export const todosContext = createContext();
function Context({ children }) {
  const [todos, setTodos] = useState([{ id: nanoid(), note: "hi friends" }]);
  const addToDo = (note) => {
    const newToDo = { id: nanoid(), note };
    setTodos([...todos, newToDo]);
  };
  const removeToDo = (todosId) => {
    const newToDos = todos.filter((t) => t.id != todosId);
    setTodos(newToDos);
  };
  // const editToDo = (todosId, note) => {
  //   let updatedToDo = todos.find((t) => t.id == todosId);
  //   updatedToDo.note = note;
  //   setTodos([...todos, updatedToDo]);
  // };
  const editToDo = (todoId, note) => {
    const newToDos = todos.map((t) => (t.id === todoId ? { ...t, note } : t));
    setTodos(newToDos);
  };
  return (
    <todosContext.Provider value={{ todos, addToDo, removeToDo, editToDo }}>
      {children}
    </todosContext.Provider>
  );
}

export default Context;
