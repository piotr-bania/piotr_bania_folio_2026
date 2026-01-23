export default function Card_Header({ title, subtitle }) {
    return (
        <header className="space-y-1">
            <h3 className="text-base font-medium tracking-tight">{title}</h3>

            {subtitle && <p className="text-xs text-black/60">{subtitle}</p>}
        </header>
    )
}
