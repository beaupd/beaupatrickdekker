import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

const Index = () => {

    const [isCollapsed, setCollapsed] = useState(false)
    const [animPos, setAnimPos] = useState({ x: 20, y: 20 })
    const menuControl = useAnimation()
    const animateSectionRef = useRef()
    const logoRef = useRef()
    const [isAnimating, setAnimating] = useState(false)

    function getQuadraticBezierXYatPercent(startPt, controlPt, endPt, percent) {
        var x = Math.pow(1 - percent, 2) * startPt.x + 2 * (1 - percent) * percent * controlPt.x + Math.pow(percent, 2) * endPt.x;
        var y = Math.pow(1 - percent, 2) * startPt.y + 2 * (1 - percent) * percent * controlPt.y + Math.pow(percent, 2) * endPt.y;
        return ({ x: x, y: y });
    }

    useEffect(() => {
        const resizeHandler = () => {
            if (window.innerWidth < 700) setCollapsed(true)
            else setCollapsed(false)
            scrollHandler()
        }
        const scrollHandler = () => {
            const animating = false
            // check if animation is still going
            if (window.pageYOffset < (animateSectionRef.current.offsetHeight - window.innerHeight)) animating = true
            else animating = false
            // animation position calculation
            if (animating) {
                let percentage = (window.pageYOffset / (animateSectionRef.current.offsetHeight - window.innerHeight))
                let pos = getQuadraticBezierXYatPercent(
                    { x: ((window.innerWidth / 2) - logoRef.current.offsetWidth), y: ((window.innerHeight / 2) - logoRef.current.offsetHeight) },
                    { x: ((window.innerWidth / 2) - logoRef.current.offsetWidth), y: ((window.innerHeight / 4) - logoRef.current.offsetHeight) },
                    { x: 20, y: 20 },
                    percentage
                )
                setAnimPos({ ...animPos, x: `${pos.x}px`, y: `${pos.y}px` })
                let size = 44 * ((1 - percentage) + 1)
                logoRef.current.width = logoRef.current.height = size
                // console.log(size)

            }
            setAnimating(animating)
        }
        scrollHandler()
        window.addEventListener("resize", resizeHandler)
        window.addEventListener("scroll", scrollHandler)
        return () => {
            window.removeEventListener("resize", resizeHandler)
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    return (
        <>
            <section style={{ height: "200vh" }} ref={animateSectionRef} className="bg-snow">
                <header className="fixed l-0 t-0 w-full bg-snow">
                    <nav className="p-5 flex space-between">
                        <div className="mr-auto" style={{ height: "44px" }}>
                            {isAnimating ? (
                                <div src="/logo.svg" style={{
                                    position: "absolute",
                                    left: animPos.x,
                                    top: animPos.y,
                                    transitionDuration: 0.3,
                                    transition: "ease"
                                }} ref={logoRef}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" strokeWidth="1" stroke="#1D2832" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M 4 8 L 18 8 a 2 2 0 1 0 -2 -2 L 16 18 a 2 2 0 1 0 2 -2 L 6 16 a 2 2 0 1 0 2 2 L 8 4 L 8 8" />
                                    </svg>
                                </div>
                            ) : (
                                <img src="/logo.svg" ref={logoRef} />
                            )}
                        </div>
                        {!isCollapsed ? (
                            <motion.ul
                                animate={menuControl}
                                className="flex items-center"
                            >
                                <li className="px-4"><a href="">Home</a></li>
                                <li className="px-4"><a href="">Works</a></li>
                                <li className="px-4"><a href="">About</a></li>
                                <li className="px-4"><a href="">Contact</a></li>
                                <li className="px-4"><a href="">Blog</a></li>
                                <li className="px-4"><a href="">Curriculum Vitae</a></li>
                            </motion.ul>
                        ) : (
                            <motion.button
                                animate={menuControl}
                                className="ml-auto"
                            >
                                <img src="/menu.svg" />
                            </motion.button>
                        )}
                    </nav>
                </header>

            </section>

            <section style={{ height: "200vh" }}>
                <h2>works</h2>
            </section>
        </>
    )
}
export default Index