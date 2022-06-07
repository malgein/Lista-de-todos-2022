import React, {useState} from 'react'
import Todos from './Todos'
import './todoApp.css'



const TodoApp = () => {
	const [title, setTitle] = useState("")
	const [todos, setTodos] = useState([])

	const handleSubmit= (e) =>{
		e.preventDefault()

		const newTodo={
			id: crypto.randomUUID(),
			title: title,
			completed: false
		}

		const temp = [...todos]
		temp.push(newTodo)

		setTodos(temp)
		setTitle("")
	}

	const handleChange= (e) =>{
		const value= e.target.value
		setTitle(value)
	}

	const handleUpdate = (id, value) => {
		const temp= [...todos]
		const item= temp.find((item) => item.id === id)
		item.title= value
		setTodos(temp)
	}

	const handleDelete = (id) =>{
		const temp = todos.filter((item) => item.id !==id)
		setTodos(temp)
	}
    return (	
		<div className="todo-container"> 
			<form className="todo-create-form" onSubmit={handleSubmit}>
				<input onChange={handleChange} className="todo-input" value={title}/>
				<input onClick={handleSubmit} 
				type="submit" value="create todo"
				className="button-create" />	
			</form >
			<div className="todos-container">
				{todos.map((item) => (
					<Todos key={item.id} item={item}
					onUpdate={handleUpdate} onDelete={handleDelete}/>	
				))}
			</div>
		</div>
  )
}

export default TodoApp