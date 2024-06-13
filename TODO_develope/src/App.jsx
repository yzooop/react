import { useReducer, useRef, useState, useCallback, createContext } from 'react'
import './App.css'
import Header from './components/Header'
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

function reducer(todos, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...todos]
        case "UPDATE_isDone":
            return todos.map((todo) =>
                todo.id === action.id
                    ? { ...todo, isDone: !todo.isDone }
                    : todo)
        case "UPDATE_isDeleted":
            return todos.map((todo) =>
                todo.id === action.id
                    ? { ...todo, isDeleted: !todo.isDeleted }
                    : todo)
        default:
            return todos
        
    }
}

export const TodoContext = createContext();

function App() {
    const [todos, dispatch] = useReducer(reducer, mockData)
    const todoId = useRef(4)

    const onCreate = useCallback ((content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: todoId.current ++,
                isDone: false,
                content: content,
                date: new Date().toISOString(),
                isDeleted: false
            }
        }) 
    }, [])

    const onUpdateIsDone = useCallback((id) => {
        dispatch({
            type: "UPDATE_isDone",
            id: id
        })
    }, [])

    // 뎁스가 변경되었을 때만 콜백함수가 생성되게
    const onUpdateIsDeleted = useCallback((id) => {
        dispatch({
            type: "UPDATE_isDeleted",
            id: id
        })
    },[])


    return (
        <div className='App'>
            <Header />
            {/* provider :  context가 공급할 데이터를 설정하거나, context의 데이터를 공급받을 컴포넌트들을 설정한다*/}
            {/* 현재 props를 전달받는 컴포넌트들을 감싸도록 */}
            {/* 공급할 데이터는 value로 전달한다. */}
            <TodoContext.Provider value={{todos, onCreate, onUpdateIsDone, onUpdateIsDeleted}}>
                <h1>To do List</h1>
                <Editor />
                <List />
            </TodoContext.Provider>
            </div>
  )
}

export default App
