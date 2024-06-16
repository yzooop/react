import { useSearchParams } from "react-router-dom"
import Header from "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"

// header
// diaryList
//// diaryitem

function Home() {
    const [params, setParams] = useSearchParams();

    return (
        <>
            <Header
                leftChild={<Button text="<" />}
                title="2024년 6월"
                rightChild={<Button text=">" />}
            />
            <DiaryList />
        </>
    )
}

export default Home