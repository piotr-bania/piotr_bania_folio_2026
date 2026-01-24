export default function Card_Section({ title, items }) {
    return (
        <section className="space-y-3">
            {title && (
                <p className="text-xs font-semibold uppercase tracking-wide text-black/40">
                    {title}
                </p>
            )}

            <ul className="space-y-2">
                {items.map((item) => (
                    <li
                        key={item}
                        className="text-sm text-black/70 leading-relaxed flex gap-2"
                    >
                        <span className="text-black/40 flex-shrink-0">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
