import { PiMinusDuotone } from "react-icons/pi"
import Headings from "@/components/text/Headings"
import Paragraph from "@/components/text/Paragraph"

export default function Card_Section({ title, items }) {
    return (
        <div className="flex flex-col gap-1 mb-4">
            {title && <Headings as="h6" text={title} />}
            {items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                    <Paragraph
                        text={<PiMinusDuotone />}
                        className="paragraph_small primary"
                    />
                    <Paragraph className="paragraph_small" text={item} />
                </div>
            ))}
        </div>
    )
}
