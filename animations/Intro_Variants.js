export const pathVariants = {
    hidden: {
        pathLength: 0,
        opacity: 1,
    },
    stroke: {
        pathLength: 1,
        opacity: 1,
        transition: {
            duration: 1,
            ease: "linear",
        },
    },
}

export const gateVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 0.2,
            ease: "linear",
        },
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
            ease: "linear",
        },
    },
}
