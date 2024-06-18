import { useState, useContext } from "react"
import { DiaryStateContext } from "../App"

import Header from "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"

// 데이터 전체중에 2024-06 데이터만 걸러주는 함수
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
    // 일기 데이터 전체
    const data = useContext(DiaryStateContext);

    // 헤더 중간에 2024-06월 (오늘 날짜)
    const [pivotDate, setPivotDate] = useState(new Date())

    // 데이터 중에 원하는 월만 걸렀음
    const monthlyData = getMonthlyData(pivotDate, data)

    // 오늘 날짜의 월 + 1월
    const onIncreaseMonth = () => {
        setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1))
    }

    // 오늘 날짜의 월 - 1월
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
            
            {/* 일기 데이터가 월별로 렌더링 됨 . 월별 다이어리 모음집*/}
            <DiaryList data={monthlyData} />
        </>
    )
}

export default Home