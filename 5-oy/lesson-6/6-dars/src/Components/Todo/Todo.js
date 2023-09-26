import React, { useRef, useState } from 'react';

const Todo = () => {
	let input = useRef();

	let data = JSON.parse(localStorage.getItem('todo'));

	let [todos, setTodos] = React.useState(data || []);
	const renderTodo = (evt) => {
		evt.preventDefault();
		let todo = {
			id: todos.at(-1)?.id + 1 || 0,
			title: input.current.value,
			isComplated: false,
		};
		input.current.value = null;
		setTodos([...todos, todo]);
		localStorage.setItem('todo', JSON.stringify([...todos, todo]));
	};

	const complated = (evt) => {
		let todo = todos.find((el) => el.id == evt.target.dataset.todoId);
		todo.isComplated = !todo.isComplated;
		setTodos([...todos]);

		localStorage.setItem('todo', JSON.stringify([...todos]));
	};
	//Nurmuhammad

	const handleDelete = (e) => {
		let del = todos.filter((el) => el.id != e.target.dataset.todoId);
		setTodos(del);

		localStorage.setItem('todo', JSON.stringify(del));
	};

	// Farrux

	const handleEdit = (evt) => {
		let edit = todos.filter((el) => el.id == evt.target.dataset.todoId);
		console.log(edit);
		let ozgaruvchi = prompt('Edit name', edit[0].title);
		edit[0].title = ozgaruvchi;
		setTodos([...todos]);

		localStorage.setItem('todo', JSON.stringify([...todos]));
	};

	return (
		<div className='todo'>
			<form onSubmit={renderTodo} className='form w-25 mx-auto mt-5'>
				<div className='input-group'>
					<input
						ref={input}
						className='form-control '
						type='text'
						placeholder='Add your tack...'
					/>
					<button className='btn btn-primary'>Add tack</button>
				</div>
			</form>

			<ul className='list-group w-50 mx-auto mt-5'>
				{todos.map((el) => (
					<li key={el.id} className='list-group-item d-flex align-items-center'>
						<input
							checked={el.isComplated}
							data-todo-id={el.id}
							onChange={complated}
							className='form-check-input me-3'
							type='checkbox'
						/>
						<strong
							className={
								el.isComplated
									? 'text-decoration-line-through text-success'
									: ''
							}>
							{el.title}
						</strong>
						<div className='ms-auto'>
							<button
								data-todo-id={el.id}
								onClick={handleEdit}
								className='btn btn-warning me-3'>
								Edit
							</button>
							<button
								data-todo-id={el.id}
								onClick={handleDelete}
								className='btn btn-danger'>
								Delete
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Todo;
