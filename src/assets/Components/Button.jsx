export default function Button({ handle, item }) {
    return (
        <>
            <button onClick={handle} className="btn btn-primary me-3">
                {item.title}
            </button>
        </>
    )
}