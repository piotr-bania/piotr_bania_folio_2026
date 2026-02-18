import Logo from "@/components/layout/Logo"
import Intro from "@/components/intro/Intro"
import Intro_Gate from "@/components/intro/Intro_Gate"
import Intro_Provider from "@/providers/Intro_Provider"
import Sidebar_Nav from "@/components/layout/Sidebar_Nav"
import Experience_Provider from "@/providers/Experience_Provider"
import Corner_Sentence from "@/components/layout/Corner_Sentence"

export default function Main_Layout({ children }) {
    return (
        <Intro_Provider>
            <Intro />
            <Logo />
            <Intro_Gate>
                <Sidebar_Nav />
                <Corner_Sentence />
                <Experience_Provider>{children}</Experience_Provider>
            </Intro_Gate>
        </Intro_Provider>
    )
}
