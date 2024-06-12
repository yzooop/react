import { useRef, useState } from 'react'
import './App.css'
import Editor from './components/Editor'
import List from './components/List'

const mockData = [
    {
        id: 1,
        isDone: false,
        content: "1번",
        date: new Date().toISOString(),
        isDeleted: false
    },
    {
        id: 2,
        isDone: false,
        content: "2번",
        date: new Date().toISOString(),
        isDeleted: false
    },
    {
        id: 3,
        isDone: false,
        content: "3번",
        date: new Date().toISOString(),
        isDeleted: false
    }
]

function App() {
    const [todos, setTodos] = useState(mockData)
    const todoId = useRef(4)

    const onCreate = (content) => {
        const newTodo = {
            id: todoId.current ++,
            isDone: false,
            content: content,
            date: new Date().toISOString(),
            isDeleted: false
        }
        setTodos([newTodo, ...todos])
    }

    const onUpdateIsDone = (id) => {
        setTodos(todos.map((todo) => 
            todo.id === id
                ? { ...todo, isDone: !todo.isDone }
                : todo
        ))
    }

    const onUpdateIsDeleted = (id) => {
        setTodos(todos.map((todo) => 
            todo.id === id
                ? { ...todo, isDeleted: !todo.isDeleted }
                : todo
        ))
    }


    return (
        <div className='App'>
            <h1>To do List</h1>
            <Editor todos={todos} onCreate={onCreate} />
            <List todos={todos} onUpdateIsDone={onUpdateIsDone} onUpdateIsDeleted={onUpdateIsDeleted}/>
        </div>
  )
}

export default App
