import { useState, useEffect, useRef } from "react"
import { motion, useAnimation } from "framer-motion"

const Index = () => {

    const [isCollapsed, setCollapsed] = useState(false)
    const [isLanding, setLanding] = useState(true)
    const [atItem, setItem] = useState(0)
    const [activeSection, setActive] = useState(0)
    const [menuBar, setMenuBar] = useState({ x: 0, w: 0 })
    const itemsContainerRef = useRef()
    const beauPhotoRef = useRef()
    const menuControl = useAnimation()
    const logoSVGControl = useAnimation()
    const logoContainerControl = useAnimation()
    const landingNameControl = useAnimation()

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
            transition: {
                type: "spring",
                stiffness: 140,
            }
        }
    }

    const logoContainer = {
        initial: {
            opacity: 1,
            left: "50%",
            top: "40%",
            width: "35vw",
            height: "35vw",
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

    const nameHeading = {
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.04,
                delayChildren: .1,
                // staggerDirection: -1
            }
        },

    }

    const nameLetter = {
        hidden: {
            opacity: 0,
            width: 0
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
            }

        }
    }

    // on mount
    useEffect(() => {
        // landing animation with await sequence
        const landingAnimation = async () => {
            await logoSVGControl.start({
                strokeDashoffset: 0,
                transition: {
                    type: "spring",
                    stiffness: 15,
                    delay: 2
                }
            })
            await landingNameControl.start("show")


            landingNameControl.start({
                opacity: 0
            })
            logoSVGControl.start({
                strokeWidth: 1,
                transition: {
                    type: "spring",
                    stiffness: 20
                }
            })
            await logoContainerControl.start("animate")
            await menuControl.start("show")
            setLanding(false)
            scrollHandler()
        }

        // on resize event handler
        const resizeHandler = () => {
            if (window.innerWidth < 900) setCollapsed(true)
            else setCollapsed(false)
        }

        // on scroll event handler
        const scrollHandler = () => {
            if (window.pageYOffset < window.innerHeight) {
                let scale = 1.5 - (((window.pageYOffset / (window.innerHeight * 2))) * 1)
                beauPhotoRef.current.style.transform = `scale3d(${scale},${scale}, 1)`
            }
        }

        // call functions on mount
        resizeHandler()
        landingAnimation()

        // add and remove listeners on mount
        window.addEventListener("resize", resizeHandler)
        window.addEventListener("scroll", scrollHandler)
        return () => {
            window.removeEventListener("resize", resizeHandler)
            window.addEventListener("scroll", scrollHandler)
        }
    }, [])

    // menu bar on hover useffect function onchange of usestate variable with index of active menu item
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
                                    // strokeWidth="1"
                                    stroke="#000000"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <motion.path
                                        initial={{
                                            strokeDasharray: 85,
                                            strokeDashoffset: 85,
                                            strokeWidth: 0.2
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
                                className="flex items-center relative font-medium"
                                ref={itemsContainerRef}
                            >
                                <motion.li variants={menuItem} onMouseEnter={() => setItem(0)} onMouseLeave={() => setItem(activeSection)}><a href="" className="px-4 text-lg py-2">Home</a></motion.li>
                                <motion.li variants={menuItem} onMouseEnter={() => setItem(1)} onMouseLeave={() => setItem(activeSection)}><a href="" className="px-4 text-lg py-2">Works</a></motion.li>
                                <motion.li variants={menuItem} onMouseEnter={() => setItem(2)} onMouseLeave={() => setItem(activeSection)}><a href="" className="px-4 text-lg py-2">About</a></motion.li>
                                <motion.li variants={menuItem} onMouseEnter={() => setItem(3)} onMouseLeave={() => setItem(activeSection)}><a href="" className="px-4 text-lg py-2">Contact</a></motion.li>
                                <motion.li variants={menuItem} onMouseEnter={() => setItem(4)} onMouseLeave={() => setItem(activeSection)}><a href="" className="px-4 text-lg py-2">Blog</a></motion.li>
                                <motion.li variants={menuItem} onMouseEnter={() => setItem(5)} onMouseLeave={() => setItem(activeSection)}><a href="" className="px-4 text-lg py-2">Curriculum Vitae</a></motion.li>
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

            {isLanding && (// Landing name animation
                <motion.h1
                    variants={nameHeading}
                    initial="hidden"
                    animate={landingNameControl}
                    className="md:text-6xl sm:text-4xl text-2xl xl:text-8xl absolute left-0 right-0 mx-auto top-1/2 text-center font-thin title-font"
                    style={{ transform: "translateY(10vw)" }}
                >
                    {(Array.from("Beau Patrick Dekker")).map((l, i) => {
                        return (
                            <motion.span
                                variants={nameLetter}
                                key={i}
                            >{l}</motion.span>
                        )
                    })}
                </motion.h1>
            )}

            {!isLanding && (// when not landing conditional render for framer motion animate on mount
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-start"
                >
                    <header className="relative z-0 xl:py-5 py-3 flex items-center flex-col mt-10 w-full">
                        <motion.div
                            initial={{
                                height: 0,
                                x: 0
                            }}
                            animate={{
                                height: "100%",
                                x: 0,
                                transition: {
                                    type: "spring",
                                    stiffness: 80
                                }
                            }}
                            className="bg-blue block absolute right-0 top-0 bottom-0 my-auto w-full xl:w-11/12 2xl:w-5/6"
                            style={{ maxWidth: `92.5%` }}
                        ></motion.div>
                        <h1 className="md:text-6xl xl:text-8xl sm:text-4xl text-2xl relative title-font">Beau Patrick Dekker</h1>
                        <span className="relative xl:text-3xl font-light title-font">Junior Fullstack Developer</span>
                    </header>

                    <div className="my-20 flex flex-row relative w-full">
                        <div className="overflow-hidden">
                            <img
                                ref={beauPhotoRef}
                                src="/beaudekker.jpg"
                                className="relative z-10"
                            />
                        </div>
                        <div className="w-full bg-black h-full absolute flex items-center justify-center">
                            <header className="z-20 relative text-white">
                                <h2>"I do everything web."</h2>
                            </header>
                        </div>
                    </div>
                </motion.section>

            )}

            <section
                style={{ display: isLanding ? "none" : "flex" }}
                className="relative h-screen items-top justify-center"
            >
                <motion.div
                    initial={{
                        height: "100%",
                        x: "-100%"
                    }}
                    whileInView={{
                        height: "100%",
                        x: "calc(-50% + 130px)",
                        transition: {
                            type: "spring",
                            stiffness: 80
                        }
                    }}
                    className="bg-blue block absolute left-0 top-0 bottom-0 my-auto w-full"
                ></motion.div>
                <header className="relative mt-4"><h2 className="md:text-4xl xl:text-6xl sm:text-2xl text-xl">Works</h2></header>
                <ul>

                </ul>
            </section>
        </>
    )
}
export default Index