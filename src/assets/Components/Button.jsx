export default function Button({ handle, title }) {
    return (
        <>
            <button onClick={handle} className="btn btn-primary me-3">
                {title}
            </button>
        </>
    )
}