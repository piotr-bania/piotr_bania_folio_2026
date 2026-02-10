import { PiCircleDuotone } from "react-icons/pi"
import Headings from "@/components/text/Headings"
import Paragraph from "@/components/text/Paragraph"

export default function Card_Header({ title, subtitle }) {
    return (
        <div>
            <Headings as="h4" text={title} className="text-left" />

            {subtitle && (
                <Paragraph className="paragraph_small" text={subtitle} />
            )}
        </div>
    )
}
