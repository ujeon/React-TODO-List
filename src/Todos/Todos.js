import React from "react";

import Todo from "../Todo/Todo";
import TodosNav from "../TodosNav/TodosNav";
import "./Todos.css";

const uniqId = require("uniqid");

const Todos = props => {
  if (props.currentList !== undefined) {
    var displayTodo = props.currentList.todos.map(el => {
      return (
        <Todo
          key={uniqId()}
          todo={el}
          toggleDone={props.toggleDone}
          deleteTodo={props.deleteTodo}
        />
      );
    });
  }

  return (
    <div className="todos-main">
      <TodosNav
        createNewTodo={props.createNewTodo}
        todoValue={props.todoValue}
        changeTodoValue={props.changeTodoValue}
        setInputEmpty={props.setInputEmpty}
      />
      <ul>{displayTodo}</ul>
    </div>
  );
};

export default Todos;
