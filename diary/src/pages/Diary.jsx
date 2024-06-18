import { useNavigate, useParams } from "react-router-dom"
import { DiaryStateContext } from "../App"
import { useContext } from "react"
import Header from "../components/Header"
import Button from "../components/Button"
import Viewer from "../components/Viewer"

function Diary() {
    const params = useParams();
    const nav = useNavigate()
    const data = useContext(DiaryStateContext);
    return (
        <div className="Diary">
            <Header
                leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)}/>}
                title="YYYY-MM-DD 기록"
                rightChild = {<Button text="수정하기" onClick={() => nav(`/edit/${params.id}`)}/>}
            />
            <Viewer />
        </div>
    )
}

export default Diary