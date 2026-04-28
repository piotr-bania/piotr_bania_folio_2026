import { getSystemBySlug } from "@/lib/systems"
import Card_Body from "@/components/card/Card_Body"
import Paragraph from "@/components/text/Paragraph"
import Media_Grid from "@/components/media/Media_Grid"
import Card_Header from "@/components/card/Card_Header"
import Card_Section from "@/components/card/Card_Section"
import Card_Container from "@/components/card/Card_Container"
import Link_Component from "@/components/text/Link_Component"

export default async function Level_Page({ params }) {
    const { slug, level } = await params
    const system = getSystemBySlug(slug)

    if (!system) return null

    const content = system[level]
    if (!content) return null

    const aggregatedMedia =
        level === "root"
            ? [
                  ...(system.root?.media || []),
                  ...(system.architecture?.media || []),
                  ...(system.evidence?.media || []),
              ]
            : content.media || []

    return (
        <main className="h-[100svh]">
            <Card_Container>
                <Card_Header title={content.title} />

                <Card_Body>
                    {/* 🔗 LINKS */}
                    {(content.live || content.links) && (
                        <div className="flex flex-wrap gap-3 mb-4">
                            {content.live && (
                                <Link_Component
                                    href={content.live.href}
                                    text={content.live.label}
                                    external
                                    className="text-sm underline opacity-90 hover:opacity-100"
                                />
                            )}

                            {content.links?.map((link) => (
                                <Link_Component
                                    key={link.href}
                                    href={link.href}
                                    text={link.label}
                                    external={link.external ?? true}
                                    className="text-sm underline opacity-70 hover:opacity-100"
                                />
                            ))}
                        </div>
                    )}

                    {/* 📝 DESCRIPTION */}
                    {content.description && (
                        <Paragraph
                            className="paragraph_small"
                            text={content.description}
                        />
                    )}

                    {/* 🎥 MEDIA */}
                    {aggregatedMedia.length > 0 && (
                        <Media_Grid media={aggregatedMedia} />
                    )}

                    {/* 📌 RESPONSIBILITIES */}
                    {content.responsibilities && (
                        <Card_Section
                            title="Responsibilities"
                            items={content.responsibilities}
                        />
                    )}

                    {/* ⚙️ STATUS */}
                    {content.status && (
                        <Card_Section
                            title={content.status.state}
                            items={content.status.notes}
                        />
                    )}

                    {/* ⭐ HIGHLIGHTS */}
                    {content.highlights && (
                        <Card_Section
                            title="Highlights"
                            items={content.highlights}
                        />
                    )}

                    {/* 🧱 COMPONENTS */}
                    {content.components && (
                        <Card_Section
                            title="Components"
                            items={content.components}
                        />
                    )}

                    {/* 🧠 DECISIONS / OPERATIONS */}
                    {content.points && <Card_Section items={content.points} />}

                    {/* 📊 EVIDENCE */}
                    {content.items && <Card_Section items={content.items} />}
                </Card_Body>
            </Card_Container>
        </main>
    )
}
