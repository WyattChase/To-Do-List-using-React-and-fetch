import React from "react";

export const List = ({ text, todo, todos, setTodos }) => {

  const deleteSingleHandler = () => {
    const deleteTodo = todos.filter((element) => element !== todo)

		fetch("https://assets.breatheco.de/apis/fake/todos/user/wyattchase",  {
			method: "PUT",
			body: JSON.stringify(deleteTodo),
			headers: {
				"Content-Type": "application/json",
			}
		}
		)
		.then((response) => {
			response.status === 200 ? setTodos(deleteTodo) : ""
		});
  }
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item === todo) {
          console.log(todo);
          return { ...item, completed: !item.completed };
        }
        
        return item;
      })
    );
  };

  return (
    <div className="todo-context">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`} key={todo}>
        {todo.label}
      </li>
      <button className="complete-btn" onClick={completeHandler}><i className="fa fa-check-circle" aria-hidden="true"></i>
</button>
      <button className="delete-btn" onClick={deleteSingleHandler}><i className="fa fa-trash" aria-hidden="true"></i>
</button>
    </div>
  );
};
