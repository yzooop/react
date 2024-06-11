import "../components/css/Input.css"

function Input({title, type, placeholder}) {
    return (
        <div className="inputBox">
            <div className="inputTitle">{title}</div>
            <input
                className="input"
                type={type}
                placeholder={placeholder}>
                </input>
            <div className="helperText">helper</div>
        </div>
    )
}

export default Input;