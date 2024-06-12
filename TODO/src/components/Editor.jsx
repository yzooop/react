import { useRef, useState } from "react"

function Editor({todos, onCreate}) {
    const [input, setInput] = useState("")
    const inputRef = useRef()

    const onChange = (e) => {
        setInput(e.target.value)
    }

    const onKeyDown = (e) => {
        if (e.keyCode == 13) {
            onSubmit()
        }
    }

    const onSubmit = () => {
        if (input === "") {
            inputRef.current.focus();
            return;
        }
        onCreate(input)
        setInput("")
    }
 
    return (
        <div className="Editor">
            <input
                ref={inputRef}
                value={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button onClick={onSubmit}>입력</button>
        </div>
    )
}

export default Editor