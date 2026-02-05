import Headings from "@/components/text/Headings"
import Paragraph from "@/components/text/Paragraph"

export default function Module_Page() {
    return (
        <main>
            <section>
                <Headings as="h1" text="Module" />
                <Paragraph
                    text="Learn about the modular components and reusable modules in
                    my systems."
                />
            </section>
        </main>
    )
}
