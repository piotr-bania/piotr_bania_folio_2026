import Card_Navigation from "./Card_Navigation"

export default function Card_Container({ children }) {
    return (
        <div
            className="card_container"
            style={{
                scrollbarColor: "#6526d1 #6526d140",
                scrollbarWidth: "thin",
            }}
        >
            <div className="inner_border">
                <div className="inner_padding">{children}</div>
                <Card_Navigation />
            </div>
        </div>
    )
}
