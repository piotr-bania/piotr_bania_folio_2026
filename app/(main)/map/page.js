import Headings from "@/components/text/Headings"
import Paragraph from "@/components/text/Paragraph"

export default function Home_Page() {
    return (
        <main className="flex flex-col justify-end h-[100svh]">
            <section className="mb-16">
                <Headings
                    as="h1"
                    text="I build and run web systems that businesses rely on"
                    className="col-start-1 col-end-4 md:col-start-1 md:col-end-6 lg:col-start-1 lg:col-end-7"
                />
                <Paragraph
                    text="I design, develop, and maintain production systems used in real operations. From invoicing and internal tools to compliance-critical workflows. These systems are built to last, not just to launch."
                    className="col-start-1 col-end-5 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-8"
                />
            </section>
        </main>
    )
}
