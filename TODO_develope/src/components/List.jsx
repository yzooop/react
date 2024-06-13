import { useContext, useMemo, useState } from "react"
import TodoItem from "./TodoItem"
import { TodoContext } from "../App"

function List() {
    const {todos} = useContext(TodoContext)
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

    const { totalCount, doneCount, notDoneCount } =
        useMemo(() => {
            const totalCount = todos.filter((todo)=>!todo.isDeleted).length;
            const doneCount = todos.filter((todo)=>todo.isDone && !todo.isDeleted).length
            const notDoneCount = totalCount - doneCount

            return {totalCount, doneCount, notDoneCount}
    }, [todos])

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData()
    
    return (
        <>
            <div>total : {totalCount}</div>
            <div>done : {doneCount}</div>
            <div>not done : {notDoneCount}</div>
            <input
                value={search}
                placeholder="검색어를 입력하세요"
                onChange={onChange}
            />
            {filteredTodos
                .filter(todo => !todo.isDeleted)
                .map((todo) => {
                return <TodoItem key={todo.id} {...todo} />
            })}
            
        </>
    )
}

export default List
