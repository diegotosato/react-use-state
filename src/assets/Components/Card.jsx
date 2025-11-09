export default function Card({ active, item }) {
    return (
        <>
            <div className="card-content">
                {active === item.id && <>
                    <h3>{item.title}</h3>
                    <p className="m-0">{item.description}</p>
                </>}

            </div>
        </>
    )
}