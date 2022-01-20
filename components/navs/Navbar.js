import Link from "next/link"
import {Heading3} from "../headings/"
import {useState} from "react"
import {motion} from "framer-motion"

const menuButton = {
    line1: {
        initial: {
            rotate: 0,
            y: 0
        },
        active: {
            rotate: 45,
            y: "25%"
        }
    },
    line2: {
        initial: {
            opacity: 1
        },
        active: {
            opacity: 0,

        }
    },
    line3: {
        initial: {
            rotate: 0,
            y: 0
        },
        active: {
            rotate: 135,
            y: "-25%"
        }
    }
}


const Navbar = () => {
    const [isMenu, setMenu] = useState(false)

    

    return (
        <nav className="w-full fixed top-0 left-0 bg-dark bg-opacity-75 backdrop-filter backdrop-blur-xl backdrop-saturate-200 text-xl text-light font-bold transition-colors">
            <ul className="flex justify-between items-center py-4">
                <li className="px-8">
                    <Link href="/"><a><Heading3>Beau</Heading3></a></Link>
                </li>
                {/* <li className="px-4"><Link href="/" >Home</Link></li>
                <li className="px-4"><Link href="/about" >About</Link></li>
                <li className="px-4"><Link href="/contact" >Contact</Link></li> */}
                <li className="px-8">
                    <button onClick={()=>setMenu(!isMenu)}>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        className="stroke-light stroke-2 z-50 relative"
                        width="44" 
                        height="44" 
                        viewBox="0 0 24 24" 
                        strokeWidth="1.5" 
                        stroke="#000000" 
                        fill="none" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        >
                            <motion.line variants={menuButton.line1}  animate={isMenu ? "active" : "initial"} x1="4" y1="6" x2="20" y2="6" />
                            <motion.line variants={menuButton.line2} animate={isMenu ? "active" : "initial"} x1="4" y1="12" x2="20" y2="12" />
                            <motion.line variants={menuButton.line3} animate={isMenu ? "active" : "initial"} x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>
                </li>
            </ul>   

            <ul className={`
                transition-all fixed top-0 left-0 w-screen h-screen 
                flex items-center justify-center flex-col backdrop-filter
                ${isMenu ? " " : "pointer-events-none"}
            `}>
                {isMenu && (
                    <>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/">Content</Link></li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar