function Controller({ fn }) {
    return (
        <div>
            <button onClick={() => { fn(-1)}}>-1</button>
            <button onClick={() => { fn(-10)}}>-10</button>
            <button onClick={() => { fn(-100)}}>-100</button>
            <button onClick={() => { fn(+100)}}>+100</button>
            <button onClick={() => { fn(+10)}}>+10</button>
            <button onClick={() => { fn(+1)}}>+1</button>
        </div>
        
    )
}

export default Controller;