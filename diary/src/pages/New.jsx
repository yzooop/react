import { useSearchParams } from "react-router-dom"

function New() {
    const [params, setParams] = useSearchParams();
    return (
        <>new</>
    )
}

export default New