import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let template = ''
	let todos = _todoService.Todos
	todos.forEach(todo => {
		let compFormat = 'alert-warning'
		if (todo.completed) { compFormat = 'alert-primary' }
		template += `
		<div class="alert ${compFormat}" role="alert">
  ${todo.description}
</div>
		<button onclick="app.controllers.todoController.removeTodo('${todo._id}')">Delete</button>
		<button onclick="app.controllers.todoController.toggleTodoStatus('${todo._id}')">Completed</button>

		`

	})
	document.getElementById('todos').innerHTML = template
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('error', _drawError)
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			description: form.todo.value
		}
		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		// asks the service to edit the todo status
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		// ask the service to run the remove todo with this id
		_todoService.removeTodo(todoId)
	}



}
