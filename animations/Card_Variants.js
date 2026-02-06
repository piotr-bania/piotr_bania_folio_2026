const ease = [0.16, 0.84, 0.3, 1]

export const card_variant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1.5,
            ease,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.75,
            ease,
        },
    },
}
