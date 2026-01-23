import Card_Body from "@/components/card/Card_Body"
import Card_Header from "@/components/card/Card_Header"
import Card_Section from "@/components/card/Card_Section"
import Card_Container from "@/components/card/Card_Container"
import Card_Navigation from "@/components/card/Card_Navigation"

export default function SystemCard({ system, level }) {
    const content = system[level]

    return (
        <Card_Container>
            <Card_Header title={content.title} subtitle={system.title} />

            {content.description && (
                <Card_Body>{content.description}</Card_Body>
            )}

            {content.points && (
                <Card_Section title="Key points" items={content.points} />
            )}

            {content.items && (
                <Card_Section title="Evidence" items={content.items} />
            )}

            <Card_Navigation
                prevLabel="Previous"
                nextLabel="Next"
                onPrev={null}
                onNext={null}
            />
        </Card_Container>
    )
}
