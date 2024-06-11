import { useState, useRef } from "react";
// 회원가입 폼
// 1. name
// 2. birth
// 3. country
// 4. introduction

function Register() {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        introduction: ""
    });

    // 새로운 ref Obj 생성
    const countRef = useRef(0);
    const inputNameRef = useRef();
    const inputBirthRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = () => {
        if (input.name === "") {
            //이름을 입력하는 dom요소에 포커스하기
            // name input에 접근해야되니까 ref 생성하기
            console.log(inputNameRef.current)
            console.log(inputBirthRef.current)
            inputNameRef.current.focus();
            inputBirthRef.current.focus();
        }
    }


    return (
        <>
            <div>
                <input
                    // input태그가 렌드링 하는 dom 요소가 ref안에 저장됨
                    ref={inputNameRef}
                    name="name"
                    type="text"
                    value={input.name}
                    onChange={onChange}
                    placeholder="이름"
                />
                {input.name}
            </div>
            <div>
                <input
                    ref={inputBirthRef}
                    name="birth"
                    type="date"
                    value={input.birth}
                    onChange={onChange}
                />
                {input.birth}
            </div>
            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}
                >
                    <option value=""></option>
                    <option value="KOREA">한국</option>
                    <option value="USA">미국</option>
                    <option value="CHINA">중국</option>
                </select>
                {input.country}
            </div>
            <div>
                <textarea
                    name="introduction"
                    value={input.introduction}
                    onChange={onChange}
                />
                {input.introduction}
            </div>
            <button onClick={onSubmit}>제출</button>
        </>
    );
}

export default Register;
