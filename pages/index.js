import Landing from "../components/layouts/Landing"
import Divider from "../components/Divider"
import Nav from "../components/Nav"
import Button from "../components/utilities/Button"
import {motion, useAnimation} from "framer-motion"
import {useEffect} from "react"

const LandingHeader = {
    word: {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0,
                // staggerDirection: -1
            }
        }
    },
    letter: {
        hidden: {
            opacity: 0,
            x: "-100%"
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 100,
            }
        }
    }
}

const Index = () => {

    return (
        <>
            <Landing>
                <header className="mb-24 mt-10 sm:mb-36">
                    <motion.h1 className="uppercase text-6xl sm:text-9xl flex flex-col font-semibold text-dark dark:text-light sm:tracking-tightst">
                        <motion.span variants={LandingHeader.word} initial="hidden" animate="show" className="block pb-3" style={{lineHeight: 0.7}}>
                            {(Array.from("Beau Patrick Dekker")).map((l, i) => {
                                if (l == " "){
                                    return (<br/>)
                                } else {
                                return (
                                    <motion.span
                                        variants={LandingHeader.letter}
                                        key={i}
                                    >{l}</motion.span>
                                )
                            }
                            })}
                        </motion.span>
                    </motion.h1>
                    <h3 className="text-lg sm:text-3xl text-dark dark:text-light font-light sm:pl-2 -mt-4">Junior Fullstack Developer</h3>
                </header>

                <Nav />

                <Divider className="my-4" />

                <section>
                    <header className="w-full flex items-center">
                        <h2 className="uppercase font-bold tracking-tight text-5xl mt-20 ml-auto">
                            About
                        </h2>
                    </header>

                    <main>

                    </main>

                    <Button>Contact</Button>
                </section>

                <Divider className="my-4" />
            </Landing>
        </>
    )
}

export default Index