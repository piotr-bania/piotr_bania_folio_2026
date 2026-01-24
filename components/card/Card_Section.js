import { PiMinusDuotone } from "react-icons/pi"

export default function Card_Section({ title, items }) {
    return (
        <div className="flex flex-col gap-1">
            {title && <h6>{title}</h6>}
            {items.map((item) => (
                <div key={item} className="flex items-center gap-2">
                    <p className="paragraph_small primary">
                        <PiMinusDuotone />
                    </p>
                    <p className="paragraph_small">{item}</p>
                </div>
            ))}
        </div>
    )
}
