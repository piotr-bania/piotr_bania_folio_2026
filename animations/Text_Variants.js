/* ---------- MOTION TOKENS ---------- */

const EASE_HUMAN = [0.16, 0.84, 0.3, 1]

/* ---------- HEADINGS ---------- */
/* Rule:
   - Same easing everywhere
   - Smaller Y deltas
   - Shorter durations
   - Delay expresses hierarchy, not drama
*/

export const heading_1_variant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: EASE_HUMAN,
            delay: 0.12,
        },
    },
}

export const heading_2_variant = {
    hidden: { opacity: 0, y: 18 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.85,
            ease: EASE_HUMAN,
            delay: 0.18,
        },
    },
}

export const heading_3_variant = {
    hidden: { opacity: 0, y: 16 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: EASE_HUMAN,
            delay: 0.24,
        },
    },
}

export const heading_4_variant = {
    hidden: { opacity: 0, y: 14 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: EASE_HUMAN,
            delay: 0.3,
        },
    },
}

export const heading_5_variant = {
    hidden: { opacity: 0, y: 12 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: EASE_HUMAN,
            delay: 0.36,
        },
    },
}

export const heading_6_variant = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: EASE_HUMAN,
            delay: 0.42,
        },
    },
}

/* ---------- PARAGRAPHS ---------- */
/* Calm, readable, never theatrical */

export const paragraph_variant = {
    hidden: { opacity: 0, y: 8 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: EASE_HUMAN,
            delay: 0.5,
        },
    },
}

/* ---------- CORNER / AUXILIARY TEXT ---------- */
/* Lower emphasis by opacity, not motion */

export const corner_sentence_variant = {
    hidden: { opacity: 0, y: 4 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.55,
            ease: EASE_HUMAN,
            delay: 0.18,
        },
    },
}

/* ---------- CONTAINERS ---------- */
/* Used for lists, stacked text blocks, nav groups */

export const list_container_variant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.06,
            delayChildren: 0.1,
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
/* Labels appear, they don’t announce themselves */

export const label_variant = {
    hidden: { opacity: 0, y: 4 },
    visible: {
        opacity: 0.6,
        y: 0,
        transition: {
            duration: 0.45,
            ease: EASE_HUMAN,
        },
    },
    exit: {
        opacity: 0,
        y: -3,
        transition: {
            duration: 0.25,
            ease: "linear",
        },
    },
}

/* ---------- LINKS (PRIMARY) ---------- */

export const link_variant = {
    hidden: { opacity: 0, y: 6 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: EASE_HUMAN,
        },
    },
    exit: {
        opacity: 0,
        y: -4,
        transition: {
            duration: 0.25,
            ease: "linear",
        },
    },
}

/* ---------- LEVEL LINKS (SECONDARY) ---------- */

export const level_link_variant = {
    hidden: { opacity: 0, y: 5 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: EASE_HUMAN,
        },
    },
    exit: {
        opacity: 0,
        y: -3,
        transition: {
            duration: 0.22,
            ease: "linear",
        },
    },
}

/* ---------- NAVIGATION ---------- */
/* Navigation should feel placed, not animated */

export const nav_container_variant = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.05,
            delayChildren: 0.1,
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
    hidden: { opacity: 0, y: 5 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.45,
            ease: EASE_HUMAN,
        },
    },
    exit: {
        opacity: 0,
        y: -4,
        transition: {
            duration: 0.25,
            ease: "linear",
        },
    },
}
