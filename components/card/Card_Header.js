import { PiCircleDuotone } from "react-icons/pi"

export default function Card_Header({ title, subtitle }) {
    return (
        <div>
            <div className="w-full inline-flex justify-between gap-x-4">
                <PiCircleDuotone
                    className="text_paragraph opacity-50"
                    size="20"
                />
                <h4 className="text-center">{title}</h4>
                <PiCircleDuotone
                    className="text_paragraph opacity-50"
                    size="20"
                />
            </div>
            <div className="w-full h-[1px] bg-[#4a455350] my-2" />
            {subtitle && <p>{subtitle}</p>}
        </div>
    )
}
