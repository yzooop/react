import { useState } from "react"
import TodoItem from "./TodoItem"

function List({ todos, onUpdateIsDone, onUpdateIsDeleted }) {
    const [search, setSearch] = useState("")
    const onChange = (e) => {
        setSearch(e.target.value)
    }
    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }
        return todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()))
    }

    const filteredTodos = getFilteredData();
    
    return (
        <>
            <input
                value={search}
                placeholder="검색어를 입력하세요"
                onChange={onChange}
            />
            {filteredTodos
                .filter(todo => !todo.isDeleted)
                .map((todo) => {
                return <TodoItem key={todo.id} {...todo} onUpdateIsDone={onUpdateIsDone} onUpdateIsDeleted={onUpdateIsDeleted}/>
            })}
            
        </>
    )
}

export default List
