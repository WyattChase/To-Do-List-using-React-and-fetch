import React from "react";

export const List = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item
      })
    );
  };

  return (
    <div>
        <li className={`todo-item ${todo.completed ? "completed" : ""}`} >
            {todo.label}
        </li>
        <button onClick={completeHandler}></button>
        <button onClick={deleteHandler}></button>

    </div>
  )
};
