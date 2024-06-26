import React, { useContext, useState } from "react";
import { todosContext } from "../todosContext/context";
import EditTodo from "./EditTodo";
import { MdEdit, MdOutlineClose } from "react-icons/md";

function Todos() {
  const { todos, removeToDo } = useContext(todosContext);
  const [showEdit, setShowEdit] = useState(false);
  const [currentId, setCurrentId] = useState();
  const handleCurrentAndEdit = (id) => {
    setCurrentId(id);
    setShowEdit(!showEdit);
  };
  return (
    <div className="todos-container">
      {" "}
      {todos.map((t, index) => {
        return (
          <>
            <p className="todo">
              {" "}
              {t.note}{" "}
              <div className="button-group">
                <button
                  className="remove-button"
                  onClick={() => removeToDo(t.id)}
                >
                  <MdOutlineClose />
                </button>{" "}
                <button
                  className="btn-edit"
                  onClick={() => handleCurrentAndEdit(t.id)}
                >
                  <MdEdit />{" "}
                </button>
              </div>
            </p>
            <div>
              {currentId == t.id && showEdit && (
                <EditTodo
                  todoId={t.id}
                  setShowEdit={setShowEdit}
                  showEdit={showEdit}
                />
              )}
            </div>
          </>
        );
      })}{" "}
    </div>
  );
}

export default Todos;
