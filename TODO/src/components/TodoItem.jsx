function TodoItem({ id, isDone, content, date, onUpdateIsDone, onUpdateIsDeleted }) {
    const onChangeCheckBox = () => {
        onUpdateIsDone(id)
    }

    const onDelete = () => {
        onUpdateIsDeleted(id)
    }

    return (
        <div
            style={{ display: "flex", gap: 50 }}
            
        >
            <input
                type="checkbox"
                onChange={onChangeCheckBox}
                checked={isDone}
            />
            <div style={{
                textDecoration: isDone ? "line-through" : "none",
                color : isDone ? "gray" : "black"
            }}>{content}</div>
            <div style={{
                textDecoration: isDone ? "line-through" : "none",
                color : isDone ? "gray" : "black"
            }}>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onDelete}>삭제</button>
        </div>
    )
}

export default TodoItem

