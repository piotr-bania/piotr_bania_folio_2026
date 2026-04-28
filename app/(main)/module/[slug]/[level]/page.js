import { getSystemBySlug } from "@/lib/systems"
import Card_Body from "@/components/card/Card_Body"
import Paragraph from "@/components/text/Paragraph"
import Card_Header from "@/components/card/Card_Header"
import Card_Section from "@/components/card/Card_Section"
import Card_Container from "@/components/card/Card_Container"
import Media_Grid from "@/components/media/Media_Grid"
import Link_Component from "@/components/text/Link_Component"

export default async function Level_Page({ params }) {
    const { slug, level } = await params
    const system = getSystemBySlug(slug)

    if (!system) return null

    const content = system[level]
    if (!content) return null

    return (
        <main className="h-[100svh]">
            <Card_Container>
                <Card_Header title={content.title} />

                <Card_Body>
                    {/* OPTIONAL LINKS */}
                    {content.live && (
                        <Link_Component
                            href={content.live.href}
                            text={content.live.label}
                            external
                            skipIntro
                        />
                    )}

                    {Array.isArray(content.links) &&
                        content.links.map((link) => (
                            <Link_Component
                                key={link.href}
                                href={link.href}
                                text={link.label}
                                external={link.external ?? true}
                                skipIntro
                            />
                        ))}

                    {content.description && (
                        <Paragraph
                            className="paragraph_small"
                            text={content.description}
                        />
                    )}

                    {Array.isArray(content.media) &&
                        content.media.length > 0 && (
                            <Media_Grid media={content.media} />
                        )}

                    {content.highlights && (
                        <Card_Section
                            title="Highlights"
                            items={content.highlights}
                        />
                    )}

                    {content.components && (
                        <Card_Section
                            title="Components"
                            items={content.components}
                        />
                    )}

                    {content.points && <Card_Section items={content.points} />}

                    {content.items && <Card_Section items={content.items} />}
                </Card_Body>
            </Card_Container>
        </main>
    )
}
