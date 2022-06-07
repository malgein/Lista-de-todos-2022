import React, {useState} from 'react'

const Todos = ({item, onUpdate, onDelete}) => {
	const [isEdit, setIsEdit] = useState(false)

	const FormEdit = () => {
		const [newValue, setNewValue] = useState(item.title)
		const handleSubmit= (e) =>{
			e.preventDefault()
		}

		const handleChange= (event) => {
			const value= event.target.value
			setNewValue(value)
		}

		const handleClickUpdateTodo=() => {
			onUpdate(item.id, newValue)
			setIsEdit(false)
		}
		return(
			<form className="todoUpdateForm" onSubmit={handleSubmit}>
				<input type="text" className="todo-input"
				onChange={handleChange} value={newValue}/>
				<button className="button" onClick={handleClickUpdateTodo}>
				Update</button>
			</form>
		)
	}

	const TodoElement=() => {
		return(
			<div className="todo-info">
				<span className="todo-title">{item.title}</span><button 
				className="button" onClick={()=> setIsEdit(true)}>
				Edit</button>
				<button className="button-delete" onClick={(e)=> onDelete(item.id)}>Delete</button>
			</div>
		)
	}
	return(
		<div className="todo">
			{isEdit ? <FormEdit /> : <TodoElement />}
		</div>
		
	)
}

export default Todos