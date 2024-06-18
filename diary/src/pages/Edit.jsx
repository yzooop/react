import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"

function Edit() {
    const nav = useNavigate()
    return (
        <>
            <Header
                leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)}/>}
                title="일기 수정하기"
                rightChild = {<Button text="삭제하기" type="NEGATIVE"/>}
            />
            <Editor />
        </>
    )
}

export default Edit