import React from "react";

function Button({ text, color = "black", children }) {
    return (
        <button onClick={(e) =>{
            console.log(text)
            console.log(e)
        }}
            style={{ color: color }}>
            {text}-{color.toUpperCase()}
            {children}
        </button>
    )
}

export default Button;