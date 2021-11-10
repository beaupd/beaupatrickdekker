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
            <section className="h-screen w-full">
                <div className={`${isSmall ? "bg-snowybgSmall" : "bg-snowybg"} bg-cover absolute h-full w-full z-0 flex items-center justify-center`}>
                    <div className="absolute z-10 h-full w-full opacity-60 bg-blue"></div>
                    <div className="container z-20 text-center w-1/2">
                        <header className="text-4xl text-light">Beau Patrick Dekker</header>
                        <p className="text-light relative mb-5">Everything web</p>
                        <button className="text-light border-2 px-4 py-2 relative"><a>Get into Contact!</a></button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mx-auto center w-1/2 my-8">
                    <header>About this site</header>
                    <p>this site is my portfolio</p>
                </div>
            </section>
        </Layout >
    )
}

export default Page