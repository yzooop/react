import TodoItem from "./TodoItem";

function TodoBoard(props) {
    console.log("todoList : ", props.todoList)
    return (
        <>
            <h1>To Do List</h1>
            {props.todoList.map(
                (item) => <TodoItem item={item} />
            )}
        </>
    )
}

export default TodoBoard;

