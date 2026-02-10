export default function Card_Container({ children }) {
    return (
        <div
            className="card_container"
            style={{
                scrollbarColor: "#6526d1 #6526d140",
                scrollbarWidth: "thin",
            }}
        >
            {children}
        </div>
    )
}
