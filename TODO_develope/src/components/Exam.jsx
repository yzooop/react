import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변환시키는 변환기 역하
function reducer(state, action) {
    if (action.type === "INCREASE") {
        return state + action.data
    } else if (action.type === "DECREASE") {
        return state + action.data
    }
    
}

const Exam = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수로 상태가 어떻게 변화되길 원하는지
        // 인자로 전달되는 객체를 액션객체라고 한다.
        dispatch({
            type: "INCREASE",
            data: 1
        })
    }
    const onClickMinus = () => {
        dispatch({
            type: "DECREASE",
            data: -1
        })
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    )
}

export default Exam;