import { resumeData } from "@/lib/resume/resume_data"
import Headings from "@/components/text/Headings"
import Paragraph from "@/components/text/Paragraph"
import Link_Component from "@/components/text/Link_Component"

export const metadata = {
    title: {
        absolute: "Piotr Bania - Resume (Web Systems Architect)",
    },
}

export default function Resume_Page() {
    const { header, summary, experience, skills, competencies, education } =
        resumeData

    return (
        <main className="resume-print resume-page">
            <section>
                <div className="col-span-12 flex flex-col items-start gap-8">
                    {/* Header */}
                    <div className="flex flex-col items-start gap-1">
                        <Headings as="h1" text={header.name} skipIntro />
                        <Headings as="h6" text={header.location} skipIntro />
                    </div>

                    <div className="flex flex-col items-start gap-1">
                        {header.contacts.map((contact, index) => (
                            <div
                                key={index}
                                className="flex flex-wrap items-center gap-1"
                            >
                                <Paragraph
                                    text={`${contact.label}:`}
                                    skipIntro
                                />
                                <Link_Component
                                    href={contact.href}
                                    text={contact.text}
                                    external={contact.external}
                                    skipIntro
                                />
                            </div>
                        ))}
                    </div>

                    {/* Professional Summary */}
                    <div className="flex flex-col items-start gap-1">
                        <Headings as="h4" text={summary.title} skipIntro />
                        <Paragraph text={summary.content} skipIntro />
                    </div>

                    {/* Professional Experience */}
                    <div className="flex flex-col items-start gap-1 space-y-4">
                        <Headings as="h4" text={experience.title} skipIntro />

                        {experience.projects.map((project, projectIndex) => (
                            <div
                                key={projectIndex}
                                className="flex flex-col items-start gap-1"
                            >
                                <Headings
                                    as="h6"
                                    text={project.title}
                                    skipIntro
                                />

                                {project.period && (
                                    <Paragraph
                                        text={project.period}
                                        skipIntro
                                    />
                                )}

                                {project.description && (
                                    <Paragraph
                                        text={project.description}
                                        skipIntro
                                    />
                                )}

                                {project.bullets && (
                                    <ul className="flex flex-col gap-1 pl-4 list-disc">
                                        {project.bullets.map(
                                            (bullet, bulletIndex) => (
                                                <li key={bulletIndex}>
                                                    <Paragraph
                                                        text={bullet}
                                                        skipIntro
                                                    />
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Skills */}
                    <div className="flex flex-col items-start gap-2 space-y-4">
                        <Headings as="h4" text={skills.title} skipIntro />

                        {skills.categories.map((category, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-start gap-1"
                            >
                                <Headings
                                    as="h6"
                                    text={category.title}
                                    skipIntro
                                />
                                <Paragraph text={category.items} skipIntro />
                            </div>
                        ))}
                    </div>

                    {/* Competencies */}
                    <div className="flex flex-col items-start gap-2">
                        <Headings as="h4" text={competencies.title} skipIntro />
                        <ul className="flex flex-col gap-1 pl-4 list-disc">
                            {competencies.items.map((item, index) => (
                                <li key={index}>
                                    <Paragraph text={item} skipIntro />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Education */}
                    <div className="flex flex-col items-start gap-2">
                        <Headings as="h4" text={education.title} skipIntro />
                        <Paragraph text={education.content} skipIntro />
                    </div>
                </div>
            </section>
        </main>
    )
}
