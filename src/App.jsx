import { useState } from "react";
import "./App.css";
import Context from "./todosContext/context";
import Todos from "./components/Todos";
import Form from "./todosContext/Form";
function App() {
  return (
    <Context>
      <div className="container">
        <Form />
        <Todos />
      </div>
    </Context>
  );
}

export default App;
