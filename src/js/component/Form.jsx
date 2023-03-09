import React from "react";
import PropTypes from "prop-types";



export const Form = ({todos, setTodos, inputValue, setInputValue}) => {
    const inputTextHandler = (e) => {
            console.log(e.target.value)
            setInputValue(e.target.value)
    }

    const submitTodoHandler = (e) => {
        e.preventDefault()
        const newTodo = [...todos, {label:inputValue, done:false}]
        setTodos(newTodo)
        setInputValue("")
    }

    return (
        <form>
            <input className="input"
                onChange = {inputTextHandler}
                value = {inputValue}
                type = 'text'
                placeholder = " Add ToDo List" />
            <button className="submit" id="no-outline" onClick = {submitTodoHandler} type = 'submit'>Submit</button>

        </form>
    )

}
