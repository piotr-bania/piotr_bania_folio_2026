export default function Card_Header({ title, subtitle }) {
    return (
        <header className="space-y-0.5 shrink-0">
            <h3 className="text-xl font-semibold tracking-tight leading-tight">
                {title}
            </h3>

            {subtitle && <p className="text-xs text-black/50">{subtitle}</p>}
        </header>
    )
}
