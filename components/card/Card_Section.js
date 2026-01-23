export default function Card_Section({ title, items }) {
    return (
        <section className="space-y-2">
            {title && (
                <p className="text-xs uppercase tracking-wide text-black/50">
                    {title}
                </p>
            )}

            <ul className="list-disc list-inside space-y-1 text-sm text-black/80">
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </section>
    )
}
