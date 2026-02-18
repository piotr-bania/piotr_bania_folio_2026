import "./globals.css"
import "./globals.scss"
import Lenis_Provider from "@/providers/Lenis_Provider"
import Toast_Provider from "@/components/toast/Toast_Provider"

export const metadata = {
    metadataBase: new URL("https://piotrbania.dev"),

    title: {
        default: "Piotr Bania - Web Systems Architect",
        template: "%s | Piotr Bania",
    },

    description:
        "Web systems architect building production-grade SaaS platforms and operational tools. Next.js, Supabase, and real-world systems used in active businesses.",

    keywords: [
        "Piotr Bania",
        "Web Systems Architect",
        "Next.js Developer",
        "SaaS Developer",
        "Production Systems",
        "Supabase",
        "Full Stack Developer London",
    ],

    authors: [{ name: "Piotr Bania" }],

    creator: "Piotr Bania",
    publisher: "Piotr Bania",

    openGraph: {
        title: "Piotr Bania - Web Systems Architect",
        description:
            "I build and operate production web systems that businesses rely on. SaaS, compliance platforms, and internal tools.",
        url: "https://piotrbania.dev",
        siteName: "Piotr Bania",
        locale: "en_GB",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Piotr Bania - Web Systems Architect",
        description:
            "Production-grade SaaS and operational systems built with Next.js.",
        creator: "@bspkprgrmmng",
    },

    robots: {
        index: true,
        follow: true,
    },

    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },

    alternates: {
        canonical: "https://piotrbania.dev",
    },
}

export default function Root_Layout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Lenis_Provider />
                <Toast_Provider>{children}</Toast_Provider>
            </body>
        </html>
    )
}
