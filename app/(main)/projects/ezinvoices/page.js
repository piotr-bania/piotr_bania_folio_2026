import Link from "next/link"

export default function EZinvoices_Page() {
    return (
        <main>
            <section>
                <h1 className="col-span-12">EZinvoices Project</h1>
                <p className="col-span-12">
                    Details about the EZinvoices project will go here.
                </p>
                <Link href="/projects" className="col-span-12">
                    Back to Projects
                </Link>
            </section>
        </main>
    )
}
