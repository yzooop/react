import { useState, useContext } from "react"
import { DiaryStateContext } from "../App"

import Header from "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"


const getMonthlyData = (pivotDate, data) => {
    const beginTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
    ).getTime()

    const endTime = new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        0, // 3월 0일 == 2월 28일로 인식됨
        23,
        59,
        59
    ).getTime()


    return data.filter((item) => {
        return beginTime <= item.createDate && item.createDate <= endTime
    })
}

function Home() {
    const data = useContext(DiaryStateContext);
    const [pivotDate, setPivotDate] = useState(new Date())
    const monthlyData = getMonthlyData(pivotDate, data)

    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }

    const onDecreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1))
    }

    return (
        <>
            <Header
                leftChild={<Button text="<" onClick={onDecreaseMonth}/>}
                title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
                rightChild={<Button text=">" onClick={onIncreaseMonth}/>}
            />
            <DiaryList data={monthlyData} />
        </>
    )
}

export default Home