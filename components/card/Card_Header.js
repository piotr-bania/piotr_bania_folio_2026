import { PiCircleDuotone } from "react-icons/pi"
import Headings from "@/components/text/Headings"
import Paragraph from "@/components/text/Paragraph"

export default function Card_Header({ title, subtitle }) {
    return (
        <div>
            <div className="w-full inline-flex justify-between gap-x-4">
                <PiCircleDuotone
                    className="text_paragraph opacity-50"
                    size="20"
                />
                <Headings as="h4" text={title} className="text-center" />
                <PiCircleDuotone
                    className="text_paragraph opacity-50"
                    size="20"
                />
            </div>
            <div className="w-full h-[1px] bg-[#4a455350] my-2" />
            {subtitle && (
                <Paragraph className="paragraph_small" text={subtitle} />
            )}
        </div>
    )
}
