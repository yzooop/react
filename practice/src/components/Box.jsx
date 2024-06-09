import React from "react";

function Box(props) {
    const click = () => {
        console.log("바이");
        alert("하이");
    }

    return (
        <div className="App">
            <div className='box'>
                Box
                {props.name}
                {props.num}
                <button onClick={click}>확인</button>
            </div>
        </div>
    )
}

export default Box;