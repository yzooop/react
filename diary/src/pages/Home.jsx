import { useSearchParams } from "react-router-dom"

function Home() {
    const [params, setParams] = useSearchParams();

    return (
        <>Home</>
    )
}

export default Home