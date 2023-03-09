import React, { useState, useEffect } from "react";
import { Form } from "./Form.jsx";




//create your first component 
const Home = () => {
	const [inputValue, setInputValue ] = useState("")
	const [todos, setTodos] = useState([])
	const APIURL = "https://assets.breatheco.de/apis/fake/todos/user/wyattchase"
	const getSampleTask = () => {
		fetch(APIURL)
			.then((response) => response.json())
			.then((newTodo) => setTodos(newTodo))
			.then((response) => console.log(response))
	}
	const updateURL = () => {
		fetch(APIURL, {
			method : 'PUT',
			body : JSON.stringify(todos),
			headers : {
				"content-type" : "application/json"
			}
		}) .then((response) => response.json())
	}

	useEffect(() => {
		getSampleTask()
	},[])


	return (
		<div className="container">
			<div>
				<Form />
			</div>
	</div>
	
	);
};

export default Home;