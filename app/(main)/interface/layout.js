import Interface_Nav from "@/components/interface/Interface_Nav"

export default function Interface_Layout({ children }) {
    return (
        <>
            <Interface_Nav />
            {children}
        </>
    )
}
