import { useParams } from "react-router-dom"

function Diary() {
    const params = useParams();
    return (
        <>{params.id}번 일기입니다</>
    )
}

export default Diary