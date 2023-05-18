import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";

export const Form = ({ todos, setTodos, input, setInput }) => {
	const inputTextHandler = (e) => {
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
		setInput("");
	};
	const deleteHandler = () => {
		const deleteAll = todos = [{label: "Add a new task", done: false}];
		console.log(deleteAll)
		fetch("https://assets.breatheco.de/apis/fake/todos/user/wyattchase",  {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json",
			}
		}
		)
		
		.then((response) => {
			response.status === 200 ? setTodos(deleteAll) : ""
		});
	  };

	  const handleKeyPress = (e) => {
		if (e.key === "Enter") {
		  submitTodoHandler(e);
		}
	  };
	



	return (
		<div>
			<input
				onChange={inputTextHandler}
				onKeyDown={handleKeyPress}
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
			<button
				onClick={deleteHandler}
				className="delete"
				type="Delete">
				<FontAwesomeIcon icon="fa-regular fa-dumpster" />
			</button>
		</div>
	);
};
