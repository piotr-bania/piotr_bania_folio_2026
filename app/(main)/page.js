import Link from "next/link"

export default function Home_Page() {
    return (
        <main>
            <section>
                <h1 className="col-start-1 col-end-9">
                    I build and run web systems that businesses rely on.
                </h1>
                <p className="col-start-1 col-end-5">
                    I design, develop, and maintain production systems used in
                    real operations - from invoicing and internal tools to
                    compliance-critical workflows. These systems are built to
                    last, not just to launch.
                </p>
                <Link href="/projects" className="col-span-12">
                    See my work
                </Link>
            </section>
        </main>
    )
}
