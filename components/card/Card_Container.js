export default function Card_Container({ children, className }) {
    return (
        <div
            className={`card_container ${className || ""}`}
            style={{
                scrollbarColor: "#6526d1 #6526d110",
                scrollbarWidth: "thin",
            }}
        >
            {children}
        </div>
    )
}
