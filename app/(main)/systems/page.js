import Headings from "@/components/text/Headings"
import Paragraph from "@/components/text/Paragraph"

export default function Systems_Page() {
    return (
        <main className="flex flex-col justify-end h-[100svh]">
            <section className="mb-16">
                <Headings
                    as="h1"
                    text="Systems in production"
                    className="col-start-1 col-end-4 md:col-start-1 md:col-end-6 lg:col-start-1 lg:col-end-7"
                />
                <div className="col-start-1 col-end-5 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-8 flex flex-col gap-4">
                    <Headings
                        as="h6"
                        text="A structured view of systems I’ve designed, shipped, and continue to operate."
                    />
                    <Paragraph
                        text="These are production-grade platforms: SaaS products,
                        compliance tooling, internal operations, and client
                        websites under active maintenance. Each system exposes
                        architecture, key decisions, and real-world evidence."
                    />
                </div>
            </section>
        </main>
    )
}
