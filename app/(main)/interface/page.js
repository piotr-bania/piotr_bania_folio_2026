import { INTERFACE } from "@/lib/interface/interface"
import Card_Body from "@/components/card/Card_Body"
import Paragraph from "@/components/text/Paragraph"
import Card_Header from "@/components/card/Card_Header"
import Card_Container from "@/components/card/Card_Container"
import Interface_Form from "@/components/interface/Interface_Form"

export default function Interface_Page() {
    const content = INTERFACE

    return (
        <main className="h-[100svh] interface-card">
            <Card_Container>
                <Card_Header title={content.title} />

                <Card_Body>
                    {content.root?.description && (
                        <Paragraph
                            className="paragraph_small"
                            text={content.root.description}
                        />
                    )}

                    <Interface_Form fields={content.form.fields} />
                </Card_Body>
            </Card_Container>
        </main>
    )
}
