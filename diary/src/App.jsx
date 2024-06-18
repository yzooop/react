import './App.css'
import { Routes, Route } from "react-router-dom"

import Diary from './pages/Diary'
import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Notfound from './pages/Notfound'
import { createContext, useReducer, useRef } from 'react'

// 1. "/" : 모든 일기를 조회하는 HOME 페이지
// 2. "/new" : 새로운 일기를 작성하는 NEW 페이지
// 3. "/diary" : 일기를 상세히 조회하는 DIARY 페이지
const mockData = [
    {
        id: 1,
        createDate: new Date("2024-06-17").getTime(),
        emotionId: 1,
        content: "1번 일기 내용",
        isDeleted : false
    },
    {
        id: 2,
        createDate: new Date("2024-06-16").getTime(),
        emotionId: 2,
        content: "2번 일기 내용",
        isDeleted : false
    },
    {
        id: 3,
        createDate: new Date("2024-05-17").getTime(),
        emotionId: 3,
        content: "3번 일기 내용",
        isDeleted : false
    }
]


function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state]
        case "UPDATE":
            return state.map(item => 
                String(item.id) === String(action.data.id)
                    ? {...action.data, isDeleted: item.isDeleted} 
                    : item)
        case "DELETE":
            return state.map(item => 
                String(item.id) === String(action.id)
                    ? {...item, isDeleted: !item.isDeleted}
                    : item)
    }
}

// diary의 context 공급
export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
    const [data, dispatch] = useReducer(reducer, mockData);
    const idRef = useRef(3);

    // 추가
    const onCreate = (createDate, emotionId, content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++, // ref는 객체다 객체다 객체다
                createDate,
                emotionId,
                content,
                isDeleted : false
            }
        })
    }

    // 수정
    const onUpdate = (id, createDate, emotionId, content, isDeleted) => {
        dispatch({
            type: "UPDATE",
            data : { id, createDate, emotionId, content, isDeleted }
        })
    }

    // 삭제
    const onDelete = (id) => {
        dispatch({
            type: "DELETE",
            id
        })
    }
    
    return (
        <>
            {/* <button onClick={() =>
                onCreate(new Date().getTime(), 1, "test")}>일기 추가 테스트</button>
            <button onClick={() =>
                onUpdate(1, new Date().getTime(), 2, "1번 일기 수정")}>일기 수정</button>
            <button onClick={() => 
                onDelete(1)}>일기 삭제</button> */}

            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/new" element={<New />}/>
                        <Route path="/diary/:id" element={<Diary />}/>
                        <Route path="/edit/:id" element={<Edit />}/>
                        <Route path="*" element={<Notfound />}/>
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    )
    
}

export default App
