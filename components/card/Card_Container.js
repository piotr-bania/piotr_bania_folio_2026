export default function Card_Container({ children }) {
    return (
        <aside className="absolute left-[var(--space-small)] bottom-16 md:left-[var(--space-medium)] md:bottom-[var(--space-medium)] lg:left-[var(--space-large)] lg:bottom-[var(--space-large)] max-w-xs md:max-w-md lg:max-w-xl max-h-[calc(100vh-4rem)] bg-white border border-[#16151950] rounded-sm shadow-lg z-50 p-[var(--space-small)]">
            {children}
        </aside>
    )
}
