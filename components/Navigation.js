import styles from "../styles/Navigation.module.css";
import Link from "next/link"
import { useState, useEffect } from "react"


const Navigation = () => {
    const [isActive, setActive] = useState(false)

    useEffect(()=>{


        let handleScroll = () => {
            window.scrollY == 0 ? setActive(false) : setActive(true)
        }

        handleScroll()

        window.addEventListener("scroll", handleScroll)
        return ()=>window.removeEventListener("scroll", handleScroll)

    })

    return (
        <nav className={`${styles.nav} ${isActive ? styles.active : ""}`}>
            <header>
                <div className={styles.logoWrapper}>
                    <a href="/">
                        {isActive ? (
                            <img src="/logo.png" />
                        ) : (
                            <img src="/logo_light.png" />
                        )}
                    </a>
                </div>
            </header>

            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Works</Link></li>
                <li><Link href="/">Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation