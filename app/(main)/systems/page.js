import { PiMinusDuotone } from "react-icons/pi"
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
                        text="A structured view of real systems I design, ship, and operate."
                    />
                    <Paragraph text="These are not concepts or demos. Each system is used in real environments, with real users and real data." />
                    <Paragraph
                        text={
                            <>
                                You can explore:
                                <span className="flex items-center gap-2">
                                    <PiMinusDuotone className="primary" />
                                    how it’s built
                                </span>
                                <span className="flex items-center gap-2">
                                    <PiMinusDuotone className="primary" />
                                    why decisions were made
                                </span>
                                <span className="flex items-center gap-2">
                                    <PiMinusDuotone className="primary" />
                                    how it performs in production
                                </span>
                            </>
                        }
                    />
                </div>
            </section>
        </main>
    )
}
