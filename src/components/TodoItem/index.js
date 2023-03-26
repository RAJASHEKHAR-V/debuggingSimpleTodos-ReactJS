import './index.css'

// Bugs identified are

// 1. id argument is not passed onto the class component function
// 2. Returned multiple jsx elements from functional component, need to use "li" element with given css class name

const TodoItem = props => {
  const {todoDetails, deleteTodo} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
