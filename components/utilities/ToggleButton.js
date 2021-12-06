import { useEffect,useState } from "react"

const ToggleButton = ({size}) => {
    const [isDark, setDark] = useState(false)

    const toggleDark = () => {
        setDark(!isDark)
        isDark ? 
        document.querySelector("html").classList.add("dark") : 
        document.querySelector("html").classList.remove("dark")
    }

    return (
        <button className="" onClick={toggleDark}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="8" cy="12" r="3" fill="#000" />
                <rect x="2" y="6" width="20" height="12" rx="6" />
            </svg>
        </button>
    )
}

export default ToggleButton