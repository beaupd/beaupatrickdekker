import Link from "next/link"
import { useRouter } from "next/router"
import Image from "next/image"

const Navigation = () => {
    const router = useRouter()

    return (
        <nav className="fixed z-50 left-0 top-0 w-full flex justify-between items-center bg-light">
            <header className="ml-3 p-3">
                <a href="/">
                    <Image src="/logo.png" width="50" height="50" />
                </a>
            </header>

            <ul className="mr-5 hidden sm:block">
                <li className={`inline-block px-5 py-2 mx-5 text-dark text-lg md:text-xl relative after:transition-all after:duration-300 before:duration-300 before:transition-all after:content-[''] after:w-0 hover:after:w-full after:absolute after:h-0 after:bottom-0 after:right-2 after:border-b-2 after:block before:content-[''] before:w-0 before:absolute before:h-0 hover:before:h-full before:top-2 before:left-1 before:border-l-2 before:block ${router.pathname == "/" ? "active" : ""}`}><Link href="/"><a className="">Home</a></Link></li>
                <li className={`inline-block px-5 mx-5 text-dark py-2 text-lg md:text-xl relative after:transition-all after:duration-300 before:duration-300 before:transition-all after:content-[''] after:w-0 hover:after:w-full after:absolute after:h-0 after:bottom-0 after:right-2 after:border-b-2 after:block before:content-[''] before:w-0 before:absolute before:h-0 hover:before:h-full before:top-2 before:left-1 before:border-l-2 before:block ${router.pathname == "/about" ? "active" : ""}`}><Link href="/about"><a>About</a></Link></li>
                <li className={`inline-block px-5 mx-5 text-dark py-2 text-lg md:text-xl relative after:transition-all after:duration-300 before:duration-300 before:transition-all after:content-[''] after:w-0 hover:after:w-full after:absolute after:h-0 after:bottom-0 after:right-2 after:border-b-2 after:block before:content-[''] before:w-0 before:absolute before:h-0 hover:before:h-full before:top-2 before:left-1 before:border-l-2 before:block ${router.pathname == "/works" ? "active" : ""}`}><Link href="/works"><a>Works</a></Link></li>
                <li className={`inline-block px-5 mx-5 text-dark py-2 text-lg md:text-xl relative after:transition-all after:duration-300 before:duration-300 before:transition-all after:content-[''] after:w-0 hover:after:w-full after:absolute after:h-0 after:bottom-0 after:right-2 after:border-b-2 after:block before:content-[''] before:w-0 before:absolute before:h-0 hover:before:h-full before:top-2 before:left-1 before:border-l-2 before:block ${router.pathname == "/contact" ? "active" : ""}`}><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
            <button className="block sm:hidden mr-5 border-solid border border-dark rounded p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </button>
        </nav>
    )
}

export default Navigation