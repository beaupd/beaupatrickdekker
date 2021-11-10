import Layout from "../components/layouts/main"
import { useEffect, useState } from "react"

const Page = () => {
    const [isSmall, setSmall] = useState(false)
    useEffect(() => {
        const resizeHandler = () => window.innerWidth < 640 ? setSmall(true) : setSmall(false)
        resizeHandler()
        window.addEventListener("resize", resizeHandler)
        return () => { window.removeEventListener("resize", resizeHandler) }
    }, [])

    return (
        <Layout>
            <section className={`${isSmall ? "bg-snowybgSmall" : "bg-snowybg"} bg-cover absolute h-screen w-screen z-0 flex items-center justify-center`}>
                <div className="absolute z-10 h-screen w-screen opacity-60 bg-blue"></div>
                <div className="container z-20 text-center w-1/2">
                    <header className="text-xl text-light">Beau Patrick Dekker</header>
                    <p className="text-light relative mb-5">Everything web</p>
                    <button className="text-light border-2 px-4 py-2 relative"><a>Get into Contact!</a></button>
                </div>
            </section>
        </Layout >
    )
}

export default Page