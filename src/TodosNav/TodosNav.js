import React from "react";
import "./TodosNav.css";

const uniqId = require("uniqid");

const TodosNav = props => {
  const changeHandle = e => {
    console.log(e.target.value);
    props.changeTodoValue(e.target.value);
  };

  const clickHandle = () => {
    const todoValue = props.todoValue;
    if (todoValue) {
      props.createNewTodo(uniqId(), todoValue);
    }
    // props.setInputEmpty();
  };

  const keyPressHandle = e => {
    if (e.key === "Enter") {
      const todoValue = props.todoValue;
      if (todoValue) {
        props.createNewTodo(uniqId(), todoValue);
      }
      // props.setInputEmpty();
    }
  };

  return (
    <div className="todos-nav">
      <input
        className="todos-input"
        onChange={changeHandle}
        // value={props.todoValue}
        onKeyPress={keyPressHandle}
      />
      <button className="todos-input-btn" onClick={clickHandle}>
        <ion-icon name="ios-add" />
      </button>
    </div>
  );
};

export default TodosNav;
