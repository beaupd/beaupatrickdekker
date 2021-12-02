import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

const Index = () => {

    const [isCollapsed, setCollapsed] = useState(false)
    const [animPos, setAnimPos] = useState({ x: 0, y: 0 })
    const [animSize, setAnimSize] = useState(0)
    const [isLanding, setLanding] = useState(true)
    const menuControl = useAnimation()
    const logoControl = useAnimation()
    const logoRef = useRef()


    function getQuadraticBezierXYatPercent(startPt, controlPt, endPt, percent) {
        var x = Math.pow(1 - percent, 2) * startPt.x + 2 * (1 - percent) * percent * controlPt.x + Math.pow(percent, 2) * endPt.x;
        var y = Math.pow(1 - percent, 2) * startPt.y + 2 * (1 - percent) * percent * controlPt.y + Math.pow(percent, 2) * endPt.y;
        return ({ x: x, y: y });
    }

    const menuContainer = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
                delayChildren: .1
            }
        }
    }

    const menuItem = {
        hidden: {
            opacity: 0,
            x: "100%"
        },
        show: {
            opacity: 1,
            x: 0,
            type: "spring",
            stiffness: 50,
        }
    }

    useEffect(() => {

        const landingAnimation = async () => {
            animationInit()
            await logoControl.start({
                strokeDashoffset: 0,
                transition: {
                    type: "spring",
                    stiffness: 20,
                    delay: 2
                }
            })
            await menuControl.start("show")
            frame()
        }

        const resizeHandler = () => {
            if (window.innerWidth < 800) setCollapsed(true)
            else setCollapsed(false)
        }

        let percentage, min, max, size, pos, i, till
        const animationInit = () => {
            // animation position calculation
            i = 0
            till = 100
            percentage = (i / till)
            min = 44
            max = 600
            size = (min + max) - (min + ((max - min) * percentage))

            pos = getQuadraticBezierXYatPercent(
                { x: ((window.innerWidth / 2) - (size / 2)), y: ((window.innerHeight / 2) - (size / 2)) },
                { x: ((window.innerWidth / 2) - (size / 2)), y: 80 },
                { x: 20, y: 20 },
                percentage
            )
            setAnimSize(size)
            setAnimPos({ ...animPos, x: `${pos.x}px`, y: `${pos.y}px` })
        }

        const frame = () => {
            percentage = (i / till)
            size = (min + max) - (min + ((max - min) * percentage))
            pos = getQuadraticBezierXYatPercent(
                { x: ((window.innerWidth / 2) - (size / 2)), y: ((window.innerHeight / 2) - (size / 2)) },
                { x: ((window.innerWidth / 2) - (size / 2)), y: 80 },
                { x: 20, y: 20 },
                percentage
            )

            setAnimPos({ ...animPos, x: `${pos.x}px`, y: `${pos.y}px` })
            setAnimSize(size)

            if (i < till) {
                i += 1
                window.requestAnimationFrame(frame)
            } else {
                setLanding(false)
            }
        }

        resizeHandler()
        window.addEventListener("resize", resizeHandler)
        landingAnimation()
        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, [])

    return (
        <>
            <section style={{ height: "200vh", position: isLanding ? "fixed" : "relative" }} className="bg-snow">
                <header className={`fixed l-0 t-0 w-full bg-snow transition-shadow ${isLanding ? "" : "shadow"} `}>
                    <nav className="p-5 flex space-between">
                        <div className="mr-auto" style={{ height: "44px" }}>
                            <motion.div style={{
                                position: isLanding ? "absolute" : "relative",
                                left: isLanding ? animPos.x : "auto",
                                top: isLanding ? animPos.y : "auto",
                                width: animSize,
                                height: animSize,
                                transition: "ease"
                            }}
                                ref={logoRef}
                                // transition={{
                                //     type: "spring",
                                //     stiffness: 1,
                                // }}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1"
                                    stroke="#1D2832"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <motion.path
                                        initial={{
                                            strokeDasharray: 85,
                                            strokeDashoffset: 85,
                                        }}
                                        animate={logoControl}
                                        d="M 4 8 L 18 8 a 2 2 0 1 0 -2 -2 L 16 18 a 2 2 0 1 0 2 -2 L 6 16 a 2 2 0 1 0 2 2 L 8 4 L 8 8"
                                    />
                                </svg>
                            </motion.div>
                        </div>
                        {!isCollapsed ? (
                            <motion.ul
                                variants={menuContainer}
                                initial="hidden"
                                animate={menuControl}
                                className="flex items-center uppercase"
                            >
                                <motion.li variants={menuItem} className="px-4"><a href="">Home</a></motion.li>
                                <motion.li variants={menuItem} className="px-4"><a href="">Works</a></motion.li>
                                <motion.li variants={menuItem} className="px-4"><a href="">About</a></motion.li>
                                <motion.li variants={menuItem} className="px-4"><a href="">Contact</a></motion.li>
                                <motion.li variants={menuItem} className="px-4"><a href="">Blog</a></motion.li>
                                <motion.li variants={menuItem} className="px-4"><a href="">Curriculum Vitae</a></motion.li>
                            </motion.ul>
                        ) : (
                            <motion.button
                                variants={menuContainer}
                                initial="hidden"
                                animate={menuControl}
                            // className="ml-auto"
                            >
                                <img src="/menu.svg" />
                            </motion.button>
                        )}
                    </nav>
                </header>
            </section>

            <section style={{ display: isLanding ? "none" : "block" }}>
                <header>
                    <h1>Beau Patrick Dekker</h1>
                </header>
            </section>

            <section style={{ height: "200vh", display: isLanding ? "none" : "block" }}>
                <h2>works</h2>
            </section>
        </>
    )
}
export default Index