import React from "react";
import "./App.css";

import Todos from "../src/Todos/Todos";
import Lists from "../src/Lists/Lists";

import { debounce } from "lodash";

/*******DATA SAMPLE ******/
// {
//   id: uniqId(),
//   title: "리스트 01",
//   todos: [
//     {
//       id: uniqId(),
//       todo: "투두 리스트 만들기",
//       done: false
//     }
//   ]
// }
/*************************/

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lists: [],
      currentList: undefined,
      currentTodoValue: "",
      currentListId: ""
    };

    this.createNewList = this.createNewList.bind(this);
    this.filterList = this.filterList.bind(this);
    // this.changeTodoValue = debounce(this.changeTodoValue, 100).bind(this);
  }

  //NOTE 새로운 리스트를 만들고, 만든리스트를 현재 리스트로 설정
  createNewList(id, title) {
    const temp = {
      id: id,
      title: title,
      todos: []
    };

    //NOTE 리스트 목록에 새로운 리스트 삽입
    let copy = [...this.state.lists, temp];

    this.setState({
      currentList: temp,
      currentListId: id,
      lists: copy
    });
  }

  //NOTE 현재리스트를 설정
  setCurrentList = list => {
    this.setState({ currentList: list });
  };

  //NOTE 투두 값 변경
  changeTodoValue = value => {
    this.setState({ currentTodoValue: value });
  };

  //NOTE 새로운 투두 만들기
  createNewTodo = (id, todo) => {
    const temp = {
      id: id,
      todo: todo,
      done: false
    };
    this.unshiftTodoToList(temp);
  };

  //NOTE 현재 리스트에 할일(todos) 삽입
  unshiftTodoToList = todo => {
    if (this.state.currentList) {
      const copy = Object.assign({}, this.state.currentList);
      copy.todos.unshift(todo);
      this.listUpdate(copy);
    }
  };

  //NOTE 업데이트 된 리스트를 리스트에서 업데이트
  listUpdate = target => {
    let copyLists = this.state.lists.slice();
    for (let i = 0; i < copyLists.length; i++) {
      if (copyLists[i].id === target.id) {
        copyLists[i] = target;
      }
    }
    this.setState({ lists: copyLists });
  };

  //NOTE 리스트를 클릭하면, 해당 리스트를 표시
  filterList(id) {
    let list;
    this.state.lists.forEach(el => {
      if (el.id === id) list = el;
    });

    this.setCurrentList(list);
  }

  //NOTE 리스트 삭제
  deleteList = id => {
    let copy = this.state.lists;
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].id === id) {
        copy.splice(i, 1);
      }
    }
    this.setState({ lists: copy });
  };

  //NOTE 투두에 done 변경
  toggleDone = target => {
    target.done === false ? (target.done = true) : (target.done = false);
    this.updateTodo(target, target.id);
  };

  //NOTE 투두에 변경이 있으면 현재 리스트에 변경사항 저장
  updateTodo = (target, id) => {
    let copy = this.state.currentList.todos.slice();
    for (let i = 0; i < copy.length; i++) {
      if (copy[i].id === id) {
        copy[i] = target;
      }
    }
    this.listUpdate(copy);
  };

  //NOTE 투두 삭제
  deleteTodo = id => {
    let copy = Object.assign({}, this.state.currentList);
    for (let i = 0; i < copy.todos.length; i++) {
      if (copy.todos[i].id === id) {
        copy.todos.splice(i, 1);
      }
      this.listUpdate(copy);
    }
  };

  //NOTE currentTodoValue를 ''으로 변경
  setInputEmpty = () => {
    this.setState({ currentTodoValue: "" });
  };

  //NOTE 현재 선택된 리스트로 id 변경
  setCurrentListId = id => {
    this.setState({ currentListId: id });
  };

  render() {
    console.log(this.state);
    return (
      <div className="main">
        <div className="app-title">TODOLIST</div>
        <div className="section">
          <div className="section-lists">
            <Lists
              lists={this.state.lists}
              currentList={this.state.currentList}
              createNewList={this.createNewList}
              filterList={this.filterList}
              deleteList={this.deleteList}
              todoValue={this.state.currentTodoValue}
              setCurrentListId={this.setCurrentListId}
              currentListId={this.state.currentListId}
            />
          </div>
          <div className="section-todos">
            <Todos
              currentList={this.state.currentList}
              todoValue={this.state.currentTodoValue}
              createNewTodo={this.createNewTodo}
              changeTodoValue={this.changeTodoValue}
              toggleDone={this.toggleDone}
              deleteTodo={this.deleteTodo}
              setInputEmpty={this.setInputEmpty}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
