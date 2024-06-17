import "./DiaryItem.css"

import Button from "./Button"
import {getEmotionImage} from "../util/get-emotion-image"

function DiaryItem({id, emotionId, createDate, content}) {
    return (
        <div className="DiaryItem">
            <div className={`img_section img_section_${emotionId}`}>
                <img src={getEmotionImage(emotionId)}></img>
            </div>
            <div className="info_section">
                <div className="created_date">{new Date(createDate).toLocaleDateString()}</div>
                <div className="content">{content}</div>
            </div>
            <div className="button_section">
                <Button text="수정하기"/>
            </div>
        </div>
    )
}

export default DiaryItem;