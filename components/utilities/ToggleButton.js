import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Circle = {
    light: {
        cx: 8,
        transition: {
            type: "spring",
            stiffness: 100
        }
    },
    dark: {
        cx: 16,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
}

const ToggleButton = ({ size }) => {
    const [isDark, setDark] = useState(false)
    const [isHovered, setHovered] = useState(false)

    const toggleDark = () => {
        isDark ?
            document.querySelector("html").classList.add("dark") :
            document.querySelector("html").classList.remove("dark")
        setDark(!isDark)
        setHovered(false)
    }
    useEffect(()=>{
        toggleDark()
    },[])

    return (
        <button className="" onClick={toggleDark} onMouseEnter={()=>setHovered(true)} onMouseLeave={()=>setHovered(false)}>
            <svg xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                strokeWidth="0.7"
                // stroke="#1D2832"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="stroke-current text-dark dark:text-light"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <motion.circle variants={Circle} animate={isDark ?  "dark" : "light" } initial={{cx:8}} cy="12" r="3" fill="currentColor" />
                <rect x="2" y="6" width="20" height="12" rx="6" />
            </svg>
        </button>
    )
}

export default ToggleButton