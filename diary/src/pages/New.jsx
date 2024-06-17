import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"
import { useNavigate } from "react-router-dom"



function New() {
    const nav = useNavigate()
    
    return (
        <>
            <Header
                leftChild={<Button text="< 뒤로 가기" onClick={() => nav("/")}/>}
                title="새 일기 쓰기"
            />
            <Editor />
        </>
    )
}

export default New