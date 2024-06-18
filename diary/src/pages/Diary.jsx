import { useNavigate, useParams } from "react-router-dom"
import { DiaryStateContext } from "../App"
import { useContext, useState, useEffect } from "react"
import Header from "../components/Header"
import Button from "../components/Button"
import Viewer from "../components/Viewer"
import { getStringedData } from "../util/getStingedDate"

function Diary() {
    const params = useParams();
    const nav = useNavigate()
    const data = useContext(DiaryStateContext);
    const [curDiaryItem, setCurDiaryItem] = useState()

    useEffect(() => {
        // context로 부터 받은 일기 데이터 중 원하는 id값의 데이터만 가지고 오기
        const currentDiaryItem = data.find(
            (item) => String(item.id) === String(params.id)
        )
        
        if (!currentDiaryItem) {
            window.alert("존재하지 않는 일기입니다.")
            nav('/', { replace: true })
        }
        setCurDiaryItem(currentDiaryItem)
    }, [params.id, data])
    // mount된 이후이거나, params.id나 data가 바뀌었다던가
    
    if (!curDiaryItem) {
        return <div>데이터 로딩중</div>
    }

    const { createDate, emotionId, content } = curDiaryItem
    const title = getStringedData(new Date(createDate))

    return (
        <div className="Diary">
            <Header
                leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)}/>}
                title={`${title} 기록`}
                rightChild = {<Button text="수정하기" onClick={() => nav(`/edit/${params.id}`)}/>}
            />
            <Viewer emotionId={emotionId} content={content} />
        </div>
    )
}

export default Diary