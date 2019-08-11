import React from "react";
import "./Todo.css";

const Todo = props => {
  // console.log(props);
  const clickCheckHandle = () => {
    // console.log(props);
    props.toggleDone(props.todo);
  };

  const clickDeleteHandle = () => {
    props.deleteTodo(props.todo.id);
  };

  let className;
  props.todo.done === false
    ? (className = "unchecked")
    : (className = "checked");

  return (
    <li className="todo-entry">
      <div className={className}>{props.todo.todo}</div>
      <div className="todo-buttons">
        <button className="check-button" onClick={clickCheckHandle}>
          <ion-icon name="ios-checkmark" />
        </button>
        <button className="delete-button" onClick={clickDeleteHandle}>
          <ion-icon name="ios-close" />
        </button>
      </div>
    </li>
  );
};

export default Todo;
