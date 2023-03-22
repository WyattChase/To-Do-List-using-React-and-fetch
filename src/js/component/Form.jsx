import React from "react";
import PropTypes from "prop-types";

export const Form = ({ todos, setTodos, input, setInput }) => {
	const inputTextHandler = (e) => {
		console.log(e.target.value);
		setInput(e.target.value);
	};
	const submitTodoHandler = (e) => {
		e.preventDefault();
		const newTodo = [...todos, { label: input, done: false }];
		fetch("https://assets.breatheco.de/apis/fake/todos/user/wyattchase",  {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json",
			}
		}
		)
		.then((response) => {
			response.status === 200 ? setTodos(newTodo) : ""
		});
	};



	return (
		<form>
			<input
				onChange={inputTextHandler}
				value={input}
				type="text"
				className="todo-input no-outline"
				placeholder="Add to List"
			/>
			<button
				onClick={submitTodoHandler}
				className="submit"
				type="submit">
				Submit
			</button>
		</form>
	);
};
