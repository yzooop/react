import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { DiaryDispatchContext } from "../App"



function New() {
    const { onCreate } = useContext(DiaryDispatchContext)
    const nav = useNavigate()

    // app comp에 있는 onCreate함수를 실행시켜야 함
    const onSubmit = (input) => {
        onCreate(input.createDate.getTime(), input.emotionId, input.content)
        nav("/", {replace:true})
    }    
    return (
        <>
            <Header
                leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)}/>}
                title="새 일기 쓰기"
            />
            <Editor onSubmit={onSubmit}/>
        </>
    )
}

export default New