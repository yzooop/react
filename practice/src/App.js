import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import "./App.css"
import { useState, useEffect, useRef } from "react";

function App() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState("")
    const isMount = useRef(false); // 아직 마운트 되지 않았다는 것을 의미

    // 1. 마운트
    // deps에 있는 변수들이 변해야만 실행되기 때문에
    // 이 콜백함수는 마운트 되고 다시는 실행되지 않음 (배열안에 아무것도 없으니까)
    // 마운트 됐을 때 한 번만 랜더링 하고 싶은 일이 있다면, 뎁스 배열에 아무것도 넣지 말기
    useEffect(() => {
        console.log("Mount")
    }, []);

    // 2. 업데이트
    // 뎁스 배열을 인자로 주지 않으면(생략하면), 콜백함수는 컴포넌트가 리랜더링 될 때마다 실행된다. 
    // 만약 업데이트 되는 순간에만 콜백함수 호출하고 싶다면, 현재 컴포넌트가 마운트 됐는지 아닌지 체크하는 변수가 필요하다 -> useRef로 만들기
    useEffect(() => {
        if (!isMount.current) {
            isMount.current = true;
            return;
        }
        console.log("Update");
    });


    // 3. 언마운트 제어




    const onClickButton = (value) => {
        setCount(count + value)
    }

    return (
        <div className="App">
            <h1>Simple Counter</h1>
            <section>
                <input value={input} onChange={(e) => {
                    setInput(e.target.value)
                }} />
                <h1>{input}</h1>
            </section>
            <section>
                <Viewer count={count} />
                {count % 2 === 0 ? <Even /> : null}
            </section>
            <section>
                <Controller fn={onClickButton} />
            </section>
        </div>

    )
}

export default App;