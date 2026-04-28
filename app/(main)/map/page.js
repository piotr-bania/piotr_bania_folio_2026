import Headings from "@/components/text/Headings"
import Paragraph from "@/components/text/Paragraph"

export default function Home_Page() {
    return (
        <main className="flex flex-col justify-end h-[100svh]">
            <section className="mb-16">
                <div className="col-start-1 col-end-5 md:col-start-1 md:col-end-8 lg:col-start-1 lg:col-end-9 flex flex-col gap-4">
                    <Headings
                        as="h1"
                        text="I build and run web systems that businesses rely on"
                    />
                    <Headings
                        as="h4"
                        text="Production-grade software. Designed for real operations."
                    />
                </div>
                <div className="col-start-1 col-end-4 md:col-start-1 md:col-end-7 lg:col-start-1 lg:col-end-7 flex flex-col gap-4">
                    <Headings
                        as="h6"
                        text="Running in live hospitality operations in London."
                    />
                    <Paragraph text="I design, build, and maintain systems used daily by real businesses. From invoicing and internal tools to booking and customer workflows. Built to be reliable, scalable, and easy to operate." />
                </div>
            </section>
        </main>
    )
}
