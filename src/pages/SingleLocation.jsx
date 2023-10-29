import { useParams } from "react-router-dom"

function SingleLocation() {
    const { id } = useParams();
    return (
        <section className="home-section">
            <h1 className="section-heading">showing results of iddasdaasdasdsadasadsadsads:{id}</h1>
        </section>
    )
}

export default SingleLocation
