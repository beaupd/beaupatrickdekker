import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

const Index = () => {

    const [isCollapsed, setCollapsed] = useState(false)
    const [isLanding, setLanding] = useState(true)
    const [atItem, setItem] = useState(0)
    const [menuBar, setMenuBar] = useState({ x: 0, w: 0 })
    const menuControl = useAnimation()
    const logoSVGControl = useAnimation()
    const logoContainerControl = useAnimation()
    const itemsContainerRef = useRef()

    const menuContainer = {
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
            stiffness: 60,
        }
    }

    const logoContainer = {
        initial: {
            opacity: 1,
            left: "50%",
            top: "50%",
            width: "60vw",
            height: "60vw",
            x: "-50%",
            y: "-50%",
            position: "fixed"
        },
        animate: {
            opacity: 1,
            left: 20,
            top: 20,
            width: 44,
            height: 44,
            x: 0,
            y: 0,
            position: "fixed",
            transition: {
                type: "spring",
                stiffness: 30
            }
        },
    }

    useEffect(() => {

        const landingAnimation = async () => {
            await logoSVGControl.start({
                strokeDashoffset: 0,
                transition: {
                    type: "spring",
                    stiffness: 10,
                    delay: 2
                }
            })
            logoContainerControl.start("animate")
            await menuControl.start("show")
            setLanding(false)
        }

        const resizeHandler = () => {
            if (window.innerWidth < 900) setCollapsed(true)
            else setCollapsed(false)
        }



        resizeHandler()
        window.addEventListener("resize", resizeHandler)
        landingAnimation()
        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, [])

    useEffect(() => {
        let items = itemsContainerRef.current.children
        let posX = 0;
        let atWidth = 0;
        for (let i = 0; i <= atItem; i++) {
            posX += items[i].offsetWidth
            if (i == atItem) {
                atWidth = items[i].offsetWidth
            }
        }
        // console.log(posX, atWidth)
        setMenuBar({ ...menuBar, x: (posX - atWidth), w: atWidth })
    }, [atItem])

    return (
        <>
            <section style={{ height: 84 }}>
                <header className="fixed l-0 t-0 w-full bg-snow transition-shadow z-50">
                    <nav className="p-5 flex space-between">
                        <div className="mr-auto" style={{ height: "44px" }}>
                            <motion.div
                                variants={logoContainer}
                                initial="initial"
                                animate={logoContainerControl}
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
                                        animate={logoSVGControl}
                                        d="M 4 8 L 18 8 a 2 2 0 1 0 -2 -2 L 16 18 a 2 2 0 1 0 2 -2 L 6 16 a 2 2 0 1 0 2 2 L 8 4 L 8 8"
                                    />
                                </svg>
                            </motion.div>
                        </div>
                        {!isCollapsed ? (
                            <motion.ul
                                variants={menuContainer}
                                initial={"hidden"}
                                animate={isLanding ? menuControl : "show"}
                                className="flex items-center relative"
                                ref={itemsContainerRef}
                            >
                                <motion.li variants={menuItem} ><a href="" className="px-4 py-2">Home</a></motion.li>
                                <motion.li variants={menuItem} onMouseEnter={() => setItem(1)} onMouseLeave={() => setItem(0)}><a href="" className="px-4 py-2">Works</a></motion.li>
                                <motion.li variants={menuItem} onMouseEnter={() => setItem(2)} onMouseLeave={() => setItem(0)}><a href="" className="px-4 py-2">About</a></motion.li>
                                <motion.li variants={menuItem} onMouseEnter={() => setItem(3)} onMouseLeave={() => setItem(0)}><a href="" className="px-4 py-2">Contact</a></motion.li>
                                <motion.li variants={menuItem} onMouseEnter={() => setItem(4)} onMouseLeave={() => setItem(0)}><a href="" className="px-4 py-2">Blog</a></motion.li>
                                <motion.li variants={menuItem} onMouseEnter={() => setItem(5)} onMouseLeave={() => setItem(0)}><a href="" className="px-4 py-2">Curriculum Vitae</a></motion.li>
                                {!isLanding && (
                                    <hr className="absolute w-1 bottom-0 transition-all" style={{ width: menuBar.w, left: menuBar.x }} />
                                )}
                            </motion.ul>
                        ) : (
                            <motion.button
                                variants={menuContainer}
                                initial={"hidden"}
                                animate={isLanding ? menuControl : "show"}
                            >
                                <motion.img variants={menuItem} src="/menu.svg" />
                            </motion.button>
                        )}
                    </nav>
                </header>
            </section>

            {!isLanding && (
            <motion.section 
            initial={{opacity: 0}}
            animate={{opacity: 1}}

            >
                <header className="relative z-0 xl:py-5 py-3 flex items-center flex-col mt-10">
                    <motion.div
                        initial={{
                            height: 0,
                            x: "30%"
                        }}
                        animate={{
                            height: "100%",
                            x: 0,
                            transition: {
                                type: "spring",
                                stiffnes: 60
                            }
                        }}
                        className="bg-blue block absolute right-0 top-0 bottom-0 my-auto"
                        style={{ width: `calc(100% - 20px)` }}
                    ></motion.div>
                    <h1 className="md:text-6xl xl:text-8xl sm:text-4xl text-2xl relative">Beau Patrick Dekker</h1>
                    <span className="relative xl:text-3xl font-light">Junior Fullstack Developer</span>

                </header>
            </motion.section>

            )}
            <section style={{ height: "200vh", display: isLanding ? "none" : "block" }}>
                <h2>works</h2>
            </section>
        </>
    )
}
export default Index