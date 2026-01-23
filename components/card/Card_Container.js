export default function Card_Container({ children }) {
    return (
        <aside className="absolute bottom-8 left-8 w-[360px] bg-white/90 backdrop-blur border border-black/10 rounded-lg shadow-sm p-4 space-y-4 z-50">
            {children}
        </aside>
    )
}
