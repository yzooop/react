// 3가지 hook팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출 될 수는 없다.
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.

import {useState} from "react"

function useInput() {
	const [value, setValue] = useState("")
	const onChange = (e) =>{
		setValue(e.target.value)
	}
	return [value, onChange]
}


function HookExam(){
	const [name, onChange] = useInput("")
	const [name2, onChange2] = useInput("")
	
	return (
		<div>
			<input value={name} onChange={onChange}/>
            <div>{name}</div>
            <input value={name2} onChange={onChange2}/>
			<div>{name2}</div>
		</div>
	)
}

export default HookExam;