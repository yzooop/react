import "./DiaryList.css"

import Button from "./Button"
import DiaryItem from "./DiaryItem"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

function DiaryList({ data }) {
    const nav = useNavigate()
    const [sortType, setSortType] = useState("latest")

    const onChangeSortType = (e) => {
        setSortType(e.target.value)
    }

    const getSortedData = () => {
        // toSorted 함수는 원본배열을 건들지 않고 정렬된 값을 반환해줌
        return data.toSorted((a, b) => {
            if (sortType == "oldest") {
                return Number(a.createDate) - Number(b.createDate)
            } else {
                return Number(b.createDate) - Number(a.createDate)
            }
        })
    }

    const sortedData = getSortedData();

    return (
        <div className="DiaryList">
            <div className="menu_bar">
                <select onChange={onChangeSortType}>
                    <option value="latest">최신순</option>
                    <option value="oldest">오래된 순</option>
                </select>
                <Button onClick={() => nav('/new')} text="새 일기쓰기" type="POSITIVE" />
            </div>
            {/* 일기 데이터 하나하나 */}
            <div className="list_wrapper">
                {sortedData.map((item) => <DiaryItem key={item.id} {...item} />)}
            </div>
        </div>
    )
}

export default DiaryList