import { useNavigate, useParams } from "react-router-dom"
import Header from "../components/Header"
import Button from "../components/Button"
import Editor from "../components/Editor"
import { useContext, useEffect, useState } from "react"
import { DiaryDispatchContext, DiaryStateContext } from "../App"


function Edit() {
    const params = useParams()
    const { onDelete, onUpdate } = useContext(DiaryDispatchContext)
    const nav = useNavigate()
    const data = useContext(DiaryStateContext)
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

    const onClickDelete = () => {
        if (window.confirm("일기를 정말 삭제할까요? 다시 복구되지 않아요 !")) {
            onDelete(params.id)
            nav('/', {replace:true})
        }          
    }

    const onSubmit = (input) => {
        if (window.confirm("일기를 정말 수정할까요?")) {
            onUpdate(params.id, input.createDate.getTime(), input.emotionId, input.content)
            nav("/", { replace : true })
        }
    }
    
    return (
        <>
            <Header
                leftChild={<Button text="< 뒤로 가기" onClick={() => nav(-1)}/>}
                title="일기 수정하기"
                rightChild = {<Button text="삭제하기" type="NEGATIVE" onClick={onClickDelete}/>}
            />
            <Editor initData={curDiaryItem} onSubmit={onSubmit}/>
        </>
    )
}

export default Edit