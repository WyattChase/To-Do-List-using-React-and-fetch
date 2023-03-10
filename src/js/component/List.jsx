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
        return item;
      })
    );
  };

  return (
    <div className="todo-context">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.label}
      </li>
      <button className="complete-btn" onClick={completeHandler}><i class="fa fa-check-circle" aria-hidden="true"></i>
</button>
      <button className="delete-btn" onClick={deleteHandler}><i class="fa fa-trash" aria-hidden="true"></i>
</button>
    </div>
  );
};
