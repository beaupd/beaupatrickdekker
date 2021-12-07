import { useState } from "react"
const Clipboard = ({ children, className = "", copy }) => {
    const [toolTip, setToolTip] = useState("Click to Copy")
    const [showTip, setShowTip] = useState(false)
    const onCopy = () => {
        navigator.clipboard.writeText(copy)
        setToolTip("✓ Copied to clipboard")
    }

    return (
        <span
            className={`border-b border-dotted border-dark dark:border-light ${className} cursor-pointer relative`}
            onClick={onCopy}
            onMouseEnter={() => setShowTip(true)}
            onMouseLeave={() => { setShowTip(false); setToolTip("Click to Copy") }}
        >
            {children}
            <span className={`absolute w-max rounded pointer-events-none
            px-5 py-2 top-0 left-1/2 -translate-x-1/2 -translate-y-full bg-light dark:bg-dark shadow-xl
            ${showTip ? "visible" : "hidden"} flex justify-between uppercase font-semibold text-sm
            `}>
                {toolTip}
            </span>
        </span>
    )
}

export default Clipboard