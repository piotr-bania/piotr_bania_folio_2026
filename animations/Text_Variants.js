/* ---------- HEADINGS ---------- */

export const heading_1_variant = {
    hidden: { opacity: 0, y: 28 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.25,
            ease: [0.16, 0.84, 0.3, 1],
            delay: 0.15,
        },
    },
}

export const heading_2_variant = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.15,
            ease: [0.16, 0.84, 0.3, 1],
            delay: 0.25,
        },
    },
}

export const heading_3_variant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.05,
            ease: [0.16, 0.84, 0.3, 1],
            delay: 0.35,
        },
    },
}

export const heading_4_variant = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.95,
            ease: [0.16, 0.84, 0.3, 1],
            delay: 0.45,
        },
    },
}

export const heading_5_variant = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.85,
            ease: [0.16, 0.84, 0.3, 1],
            delay: 0.55,
        },
    },
}

export const heading_6_variant = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: [0.16, 0.84, 0.3, 1],
            delay: 0.65,
        },
    },
}

/* ---------- PARAGRAPHS ---------- */

export const paragraph_variant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.85,
            ease: [0.16, 0.84, 0.3, 1],
            delay: 0.75,
        },
    },
}

const ease = [0.16, 0.84, 0.3, 1]

/* ---------- CONTAINERS ---------- */

export const list_container_variant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.12,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
}

/* ---------- LABELS ---------- */

export const label_variant = {
    hidden: { opacity: 0, y: 6 },
    visible: {
        opacity: 0.6,
        y: 0,
        transition: {
            duration: 0.5,
            ease,
        },
    },
    exit: {
        opacity: 0,
        y: -4,
        transition: {
            duration: 0.25,
            ease,
        },
    },
}

/* ---------- LINKS (PRIMARY) ---------- */

export const link_variant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease,
        },
    },
    exit: {
        opacity: 0,
        y: -6,
        transition: {
            duration: 0.3,
            ease,
        },
    },
}

/* ---------- LEVEL LINKS (SECONDARY) ---------- */

export const level_link_variant = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease,
        },
    },
    exit: {
        opacity: 0,
        y: -4,
        transition: {
            duration: 0.25,
            ease,
        },
    },
}

/* ---------- NAVIGATION (CONTAINERS & LINKS) ---------- */

export const nav_container_variant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.12,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.04,
            staggerDirection: -1,
        },
    },
}

export const nav_link_variant = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.16, 0.84, 0.3, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -6,
        transition: {
            duration: 0.3,
            ease: [0.16, 0.84, 0.3, 1],
        },
    },
}
