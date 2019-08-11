import React from "react";
import "./Lists.css";

import List from "../List/List";
import ListsNav from "../ListsNav/ListsNav";

const uniqId = require("uniqid");

const Lists = props => {
  const displayList = props.lists.map(el => {
    return (
      <List
        key={uniqId()}
        list={el}
        filterList={props.filterList}
        deleteList={props.deleteList}
        setCurrentListId={props.setCurrentListId}
        currentListId={props.currentListId}
      />
    );
  });

  return (
    <div className="lists-main">
      <ListsNav
        createNewList={props.createNewList}
        todoValue={props.todoValue}
      />
      <ul className="lists">{displayList}</ul>
    </div>
  );
};

export default Lists;
