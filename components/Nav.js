import { useEffect, useState, useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import ToggleButton from "./utilities/ToggleButton"
import MenuButton from "./utilities/MenuButton"

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
    const navRef = useRef()
    const [navHeight, setNavHeight] = useState(0)
    const [isCollapsed, setCollapsed] = useState(false)

    // on mount
    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth < 900) setCollapsed(true)
            else setCollapsed(false)
            setNavHeight(navRef.current.offsetHeight)
        }
        resizeHandler()
        window.addEventListener("resize", resizeHandler)
        return () => window.removeEventListener("resize", resizeHandler)

    }, [])

    return (
        <nav className="flex justify-between items-center w-full" ref={navRef}>
            <a href="" className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={navHeight}
                    height={navHeight}
                    viewBox="0 0 24 24"
                    strokeWidth="1"
                    stroke="#000000"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path
                        d="M 4 8 L 18 8 a 2 2 0 1 0 -2 -2 L 16 18 a 2 2 0 1 0 2 -2 L 6 16 a 2 2 0 1 0 2 2 L 8 4 L 8 8"
                    />
                </svg>
            </a>

            {!isCollapsed ? (
                <motion.ul
                    variants={menu}
                    initial={"hidden"}
                    animate={"show"}
                    className="flex items-center relative font-medium"
                >
                    
                    <motion.li variants={menu.item}><a href="" className="px-4 text-lg py-4">Home</a></motion.li>
                    <motion.li variants={menu.item}><a href="" className="px-4 text-lg py-4">Works</a></motion.li>
                    <motion.li variants={menu.item}><a href="" className="px-4 text-lg py-4">About</a></motion.li>
                    <motion.li variants={menu.item}><a href="" className="px-4 text-lg py-4">Contact</a></motion.li>
                    <motion.li variants={menu.item}><a href="" className="px-4 text-lg py-4">Blog</a></motion.li>
                    <motion.li variants={menu.item}><a href="" className="px-4 text-lg py-4">Curriculum Vitae</a></motion.li>
                    <motion.li variants={menu.item} className="flex items-center"><ToggleButton/></motion.li>
                </motion.ul>
            ) : (
                <motion.ul
                    variants={menu}
                    initial={"hidden"}
                    animate={"show"}
                    className="flex items-center relative font-medium"
                >
                    <motion.li variants={menu.item} className="flex items-center"><ToggleButton size={navHeight}/></motion.li>
                    <motion.li variants={menu.item} className="flex items-center cursor-pointer"><MenuButton size={navHeight}/></motion.li>
                </motion.ul>
            )}

        </nav>
    )
}

export default Nav