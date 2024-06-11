import { useState } from "react";

function Bulb() {
    const [light, setLight] = useState("OFF");
    const lightHandler = () => {
        setLight(light === "OFF" ? "ON" : "OFF");
    }

    return (
        <>
            {light === "ON" ? (
                <h1 style={{backgroundColor:"orange"}}>ON</h1>
            ): (
                <h1 style={{backgroundColor:"gray"}}>OFF</h1>
            )}
            
            <button onClick={lightHandler}>{light==="OFF" ? "켜기" : "끄기"}</button>
        </>
    )
}

export default Bulb;