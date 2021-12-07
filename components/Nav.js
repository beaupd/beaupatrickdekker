import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import ToggleButton from "./utilities/ToggleButton"
import MenuButton from "./utilities/MenuButton"
import Container from "./Container"


const Nav = () => {
    const [isSticky, setSticky] = useState(false)
    const navRef = useRef()
    const navHeight = 66

    // on mount
    useEffect(() => {
        const navY = navRef.current.offsetTop
        const scrollHandler = () => window.pageYOffset > navY ? setSticky(true) : setSticky(false)

        window.addEventListener("scroll", scrollHandler)
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    return (
        <>
            {isSticky && (
                <div style={{ height: navHeight }}></div>
            )}
            <nav className={`w-full bg-light dark:bg-dark top-0 left-0 z-50  ${isSticky ? "fixed" : "relative"}`} ref={navRef}>
                <Container className="flex justify-between items-center">
                <a href="" className="relative">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={navHeight}
                        height={navHeight}
                        viewBox="0 0 24 24"
                        strokeWidth="0.7"
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


                <ul
                    className="flex items-center relative font-medium"
                >
                    <li className="flex items-center"><ToggleButton size={navHeight} /></li>
                    <li className="flex items-center"><MenuButton size={navHeight} /></li>
                </ul>
                </Container>
            </nav>
        </>
    )
}

export default Nav