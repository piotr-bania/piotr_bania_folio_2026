import { hospitalitySystemsData } from "@/lib/hospitality_systems/hospitality_systems_data"
import Headings from "@/components/text/Headings"
import Paragraph from "@/components/text/Paragraph"

export default function Hospitality_Systems_Page() {
    const {
        header,
        introduction,
        proof,
        differentiation,
        opportunity,
        closing,
    } = hospitalitySystemsData

    return (
        <main className="resume-print resume-page">
            <section>
                <div className="col-start-1 col-end-5 md:col-start-2 md:col-end-8 lg:col-start-3 lg:col-end-11 flex flex-col items-start gap-8">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                        <Headings as="h1" text={header.title} skipIntro />
                        <Headings as="h4" text={header.subtitle} skipIntro />
                    </div>

                    {/* Intro */}
                    <Paragraph text={introduction.content} skipIntro />

                    {/* Proof */}
                    <div className="flex flex-col gap-4">
                        <Headings
                            as="h5"
                            text={proof.title}
                            skipIntro
                            className="underline"
                        />

                        {proof.items.map((item, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <Headings as="h6" text={item.title} skipIntro />

                                <ul className="ml-6 pl-4 list-disc flex flex-col gap-1">
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i}>
                                            <Paragraph
                                                text={bullet}
                                                skipIntro
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Differentiation */}
                    <div className="flex flex-col gap-2">
                        <Headings
                            as="h5"
                            text={differentiation.title}
                            skipIntro
                            className="underline"
                        />

                        <ul className="ml-6 pl-4 list-disc flex flex-col gap-1">
                            {differentiation.items.map((item, index) => (
                                <li key={index}>
                                    <Paragraph text={item} skipIntro />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opportunity */}
                    <div className="flex flex-col gap-2">
                        <Headings
                            as="h5"
                            text={opportunity.title}
                            skipIntro
                            className="underline"
                        />
                        <Paragraph text={opportunity.content} skipIntro />
                    </div>

                    {/* Closing */}
                    <Paragraph text={closing.content} skipIntro />
                </div>
            </section>
        </main>
    )
}
