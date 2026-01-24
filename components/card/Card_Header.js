export default function Card_Header({ title, subtitle }) {
    return (
        <header>
            <h4>{title}</h4>
            {subtitle && <p>{subtitle}</p>}
        </header>
    )
}
