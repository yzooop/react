import { memo } from "react";

function Header() {
    return (
        <div>
            <h3>오늘은</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    )
}

// props가 변경되지 않았을 때는 리랜더링되지 않도록


export default memo(Header);