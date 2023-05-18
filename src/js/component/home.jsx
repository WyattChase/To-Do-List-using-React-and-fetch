import React, { useState, useEffect } from "react";

//Importing Components
import { Form } from "./Form.jsx";
import { Todo } from "./todo.jsx";

//create your first component
const Home = () => {
	const [input, setInput] = useState("");
	const [todos, setTodos] = useState([]);

	const APIURL = "https://assets.breatheco.de/apis/fake/todos/user/wyattchase";
	const getSampleTask = () => {
		fetch(APIURL)
			.then((response) => response.json())
			.then((newTodo) => setTodos(newTodo))
	};

	const updateURL = () => {
		fetch(APIURL, {
			method: "PUT",
			body: JSON.stringify(todos),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => response.json());
	};
	useEffect(() => {
		getSampleTask();
	}, []);
	return (
		<div>
			<header>
				<h1>Jean's Todo List</h1>
			</header>
			<div>
				<Form
					input={input}
					todos={todos}
					setTodos={setTodos}
					setInput={setInput}
				/>
				<Todo todos={todos} setTodos={setTodos} />
			</div>
		</div>
	);
};

export default Home;
