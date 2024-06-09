import './css/TodoItem.css'

function TodoItem(props) {
    return (
        <div className="todo-item">
            {props.item}
        </div>
    )
}

export default TodoItem;