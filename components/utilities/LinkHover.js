import Link from "next/link"

const LinkHover = ({ children, href = "/" }) => {
    return (
        <a className="relative">
        <Link href={href}>
            <a className="
                after:content-[''] after:absolute after:block after:origin-right hover:after:origin-left after:w-full 
                after:border-dark dark:after:border-light after:border-b-2 after:scale-x-0 hover:after:scale-x-100
                after:transition-transform after:duration-300
            ">
                {children}
            </a>
        </Link>
        </a>
    )
}

export default LinkHover