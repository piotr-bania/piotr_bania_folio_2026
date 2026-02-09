const EASE_HUMAN = [0.16, 0.84, 0.3, 1]

export const card_variant = {
    hidden: {
        opacity: 0,
        y: 16,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: EASE_HUMAN,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
            ease: "linear",
        },
    },
}
