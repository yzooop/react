import { useEffect } from "react";

function Even() {
    // useEffect로 even컴포넌트가 언마운트 되는것을 제어해보겠다.
    // useEffect의 콜백함수 안에 return으로 콜백함수를 반환하는 함수를 "클린업" 혹은 "정리함수" 라고 한다.
    // 정리함수는 useEffect가 끝날 때 실행된다.
    // 지금처럼 뎁스를 빈배열로 전달하면, 
    // useEffect는 마운트될 때 실행되기 때문에, 
    // 마운트 될 때 실행되고, 언마운트 될 때 종료된다.
    useEffect(() => {
        return () => {
            console.log("unmount")
        };
    }, [])


    return <div>짝수입니다.</div>
}

export default Even;