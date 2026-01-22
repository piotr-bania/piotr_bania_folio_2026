import Link from "next/link"

export default function Projects_Page() {
    return (
        <main>
            <section>
                <h1 className="col-span-12">My Projects</h1>
                <p className="col-span-12">
                    Here are some of the projects I have worked on recently.
                </p>
                {/* List of projects (one for now) with links: EZinvoices */}
                <Link href="/projects/ezinvoices" className="col-span-12">
                    EZinvoices Project
                </Link>
                {/* back home */}
                <Link href="/" className="col-span-12">
                    Back to Home
                </Link>
            </section>
        </main>
    )
}
