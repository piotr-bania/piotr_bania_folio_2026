export default function Card_Container({ children }) {
    return (
        <aside
            className="absolute left-[var(--space-small)] bottom-16 md:left-[var(--space-medium)] md:bottom-[var(--space-medium)] lg:left-[var(--space-large)] lg:bottom-[var(--space-large)] max-w-xs md:max-w-md lg:max-w-xl max-h-[55svh] md:max-h-[65svh] lg:max-h-[75svh] bg-white border rounded-lg border-[#16151950] shadow-lg z-50 p-[var(--space-small)] flex flex-col gap-4 overflow-y-auto"
            style={{
                scrollbarColor: "#6526d1 #6526d140",
                scrollbarWidth: "thin",
            }}
        >
            {children}
        </aside>
    )
}
