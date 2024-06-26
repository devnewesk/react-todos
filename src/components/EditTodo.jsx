import React, { useContext, useState } from "react";
import { todosContext } from "../todosContext/context";

function EditTodo({ todoId, setShowEdit, showEdit }) {
  const { todos, editToDo } = useContext(todosContext);
  const todo = todos.find((t) => t.id === todoId);
  const [todoNote, setTodoNote] = useState(todo.note);
  const handleSubmit = (e) => {
    e.preventDefault();
    editToDo(todoId, todoNote);
    setShowEdit(!showEdit);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="edit-input"
        value={todoNote}
        onChange={(e) => setTodoNote(e.target.value)}
      />
      <button className="todos-button" type="submit">
        save
      </button>
    </form>
  );
}

export default EditTodo;
