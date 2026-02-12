import Resume_Nav from "@/components/layout/Resume_Nav"

export default function Resume_Layout({ children }) {
    return (
        <>
            <Resume_Nav />
            {children}
        </>
    )
}
