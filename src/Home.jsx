import { useParams } from "react-router-dom"

function Home() {
    const data = useParams()
    console.log(data);
    return (
        <div>
            <h1>Selamat Datang, {data.email}</h1>
        </div>
    )
}

export default Home