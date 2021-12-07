import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import ToggleButton from "./utilities/ToggleButton"
import MenuButton from "./utilities/MenuButton"
import Container from "./Container"

const menu = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.20,
            delayChildren: .1,
            staggerDirection: -1
        }
    },
    item: {
        hidden: {
            opacity: 0,
            x: "100%"
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 140,
            }
        }
    }
}

const Nav = () => {
    const [isSticky, setSticky] = useState(false)
    const [placeholderHeight, setPlaceholder] = useState(0)
    const navRef = useRef()
    const navHeight = 66

    // on mount
    useEffect(() => {
        const navY = navRef.current.offsetTop
        const scrollHandler = () => {
            if (window.pageYOffset > navY) {
                setSticky(true)
                setPlaceholder(navRef.current.style.height)
                console.log(window.pageYOffset, navY)
            }
            else {
                setSticky(false)
            }
        }

        window.addEventListener("scroll", scrollHandler)
        return () => window.removeEventListener("scroll", scrollHandler)

    }, [])

    return (
        <>
            {isSticky && (
                <div style={{ height: 66 }}></div>
            )}
            <nav className={`w-full bg-light dark:bg-dark top-0 left-0 ${isSticky ? "fixed" : "relative"}`} ref={navRef}>
                <Container className="flex justify-between items-center bg-light dark:bg-dark">
                    <a href="" className="relative">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={navHeight}
                            height={navHeight}
                            viewBox="0 0 24 24"
                            strokeWidth="1"
                            // stroke="#000000"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="stroke-current text-dark dark:text-light"
                        >
                            <path
                                d="M 4 8 L 18 8 a 2 2 0 1 0 -2 -2 L 16 18 a 2 2 0 1 0 2 -2 L 6 16 a 2 2 0 1 0 2 2 L 8 4 L 8 8"
                            />
                        </svg>
                    </a>


                    <motion.ul
                        variants={menu}
                        initial={"hidden"}
                        animate={"show"}
                        className="flex items-center relative font-medium"
                    >
                        <motion.li variants={menu.item} className="flex items-center"><ToggleButton size={navHeight} /></motion.li>
                        <motion.li variants={menu.item} className="flex items-center cursor-pointer"><MenuButton size={navHeight} /></motion.li>
                    </motion.ul>
                </Container>
            </nav>
        </>
    )
}

export default Nav