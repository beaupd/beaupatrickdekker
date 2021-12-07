import { useState } from "react"
import { motion } from "framer-motion"
import LinkHover from "./LinkHover"

const Menu = {
    hamburger: {
        line1: {
            open: {
                y1: 6,
                y2: 6,
            },
            closed: {
                y1: 6,
                y2: 18,
            }
        },
        line2: {
            open: {
                y1: 12,
                y2: 12,
                opacity: 1
            },
            closed: {
                opacity: 0
            }
        },
        line3: {
            open: {
                y1: 18,
                y2: 18,
            },
            closed: {
                y1: 18,
                y2: 6,
            }
        }
    }
}


const MenuButton = ({ size }) => {
    const [isActive, setActive] = useState(false)

    return (
        <div className={isActive ? "fixed w-full h-full top-0 left-0 bg-light dark:bg-dark flex items-center justify-start" : "relative"}>
            <button onClick={() => setActive(!isActive)}>
                <svg xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    strokeWidth="0.7"
                    // stroke="#1D2832"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`stroke-current text-dark dark:text-light z-50 ${isActive ? "absolute top-0 right-0" : "relative"}`}
                >
                    <motion.line variants={Menu.hamburger.line1} animate={isActive ? "closed" : "open"} x1="4" x2="20" />
                    <motion.line variants={Menu.hamburger.line2} animate={isActive ? "closed" : "open"} x1="4" x2="20" />
                    <motion.line variants={Menu.hamburger.line3} animate={isActive ? "closed" : "open"} x1="4" x2="20" />
                </svg>
            </button>

            {isActive && (
                <motion.ul className="text-7xl ml-64">
                    <li className="py-px"><LinkHover>Home</LinkHover></li>
                    <li className="py-px"><LinkHover>About</LinkHover></li>
                    <li className="py-px"><LinkHover>Works</LinkHover></li>
                    <li className="py-px"><LinkHover>Contact</LinkHover></li>
                    <li className="py-px"><LinkHover href="/styleguide">Styleguide</LinkHover></li>
                    <li className="py-px"><LinkHover>Blog</LinkHover></li>
                    <li className="py-px"><LinkHover>Resumé</LinkHover></li>
                </motion.ul>
            )}

        </div>
    )
}

export default MenuButton