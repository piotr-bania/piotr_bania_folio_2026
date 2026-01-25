import { PiArrowLeftDuotone, PiArrowRightDuotone } from "react-icons/pi"

export default function Card_Navigation({
    prevLabel,
    nextLabel,
    onPrev,
    onNext,
}) {
    return (
        <div className="flex justify-between items-center mx-4 my-2">
            <>
                <PiArrowLeftDuotone
                    onClick={onPrev}
                    disabled={!onPrev}
                    size="32"
                />{" "}
                {prevLabel}
            </>

            <>
                {nextLabel}{" "}
                <PiArrowRightDuotone
                    onClick={onNext}
                    disabled={!onNext}
                    size="32"
                />
            </>
        </div>
    )
}
