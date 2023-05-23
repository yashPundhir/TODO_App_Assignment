import { useReducer, useState } from "react";
import todoReducer from "./TodoReducer";

const TodoApp = () => {
	const [todos, dispatch] = useReducer(todoReducer, []);
	const [newTodo, setNewTodo] = useState("");

	const addTodo = () => {
		if (newTodo.trim() !== "") {
			dispatch({ type: "ADD_TODO", payload: newTodo });
			setNewTodo("");
		}
	};

	const toggleTodo = (id) => {
		dispatch({ type: "TOGGLE_TODO", payload: id });
	};

	const deleteTodo = (id) => {
		dispatch({ type: "DELETE_TODO", payload: id });
	};

	return (
		<div>
			<h1 className="mb-20 font-semibold">Todo App</h1>
			<div className="flex justify-center gap-10 mb-10">
				<input
					type="text"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
					placeholder="Add a new todo..."
					className="input input-bordered w-[350px] font-semibold text-black"
				/>
				<button className="btn btn-outline btn-accent" onClick={addTodo}>
					Add Todo
				</button>
			</div>
			<ul className="flex flex-col justify-center items-center gap-10 ">
				{todos.map((todo) => (
					<li
						className="flex justify-center items-center gap-10 w-auto px-5 py-3 border-2 border-blue-400 rounded-2xl"
						key={todo.id}
						style={{ textDecoration: todo.completed ? "line-through" : "none" }}
					>
						<input
							className="checkbox checkbox-success mt-1"
							type="checkbox"
							onClick={() => toggleTodo(todo.id)}
						/>
						<span className="text-2xl font-semibold">{todo.text}</span>
						<button
							className="btn btn-outline btn-error"
							onClick={() => deleteTodo(todo.id)}
						>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoApp;
