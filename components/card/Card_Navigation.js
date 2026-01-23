export default function Card_Navigation({
    prevLabel,
    nextLabel,
    onPrev,
    onNext,
}) {
    return (
        <nav className="flex justify-between pt-2 border-t border-black/10 text-sm">
            <button
                onClick={onPrev}
                disabled={!onPrev}
                className="text-black/60 hover:text-black disabled:opacity-30"
            >
                ← {prevLabel}
            </button>

            <button
                onClick={onNext}
                disabled={!onNext}
                className="text-black/60 hover:text-black disabled:opacity-30"
            >
                {nextLabel} →
            </button>
        </nav>
    )
}
