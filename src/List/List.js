import React from "react";
import "./List.css";

const List = props => {
  const clickListHandle = () => {
    let targetId = props.list.id;
    props.filterList(targetId);
    props.setCurrentListId(targetId);
  };

  const clickDeleteHandle = () => {
    let targetId = props.list.id;
    props.deleteList(targetId);
  };

  let className =
    props.currentListId !== props.list.id ? "list-entry" : "list-entry-clicked";

  return (
    <li className={className} onClick={clickListHandle}>
      <div className="list-title">{props.list.title}</div>
      <div className="list-delete-btn" onClick={clickDeleteHandle}>
        <ion-icon name="ios-close" />
      </div>
    </li>
  );
};

export default List;
