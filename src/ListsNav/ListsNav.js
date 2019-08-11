import React from "react";
import "./ListsNav.css";

const uniqId = require("uniqid");

const ListsNav = props => {
  const clickHandle = e => {
    const newListName = prompt("새로운 리스트 이름을 입력하세요");
    if (newListName) {
      props.createNewList(uniqId(), newListName);
    }
  };
  return (
    <div className="lists-nav">
      <button className="add-button" onClick={clickHandle}>
        <ion-icon name="ios-add" />
      </button>
    </div>
  );
};

export default ListsNav;
