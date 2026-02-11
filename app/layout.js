import "./globals.css"
import "./globals.scss"
import Logo from "@/components/layout/Logo"
import Intro from "@/components/layout/Intro"
import Lenis_Provider from "@/providers/Lenis_Provider"
import Intro_Provider from "@/providers/Intro_Provider"
import Intro_Gate from "@/components/layout/Intro_Gate"
import Sidebar_Nav from "@/components/layout/Sidebar_Nav"
import Experience_Provider from "@/providers/Experience_Provider"
import Corner_Sentence from "@/components/layout/Corner_Sentence"

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
        creator: "@yourhandle", // replace or remove if not needed
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

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Lenis_Provider />
                <Intro_Provider>
                    <Intro />
                    <Logo />
                    <Intro_Gate>
                        <Sidebar_Nav />
                        <Corner_Sentence />
                        <Experience_Provider>{children}</Experience_Provider>
                    </Intro_Gate>
                </Intro_Provider>
            </body>
        </html>
    )
}
